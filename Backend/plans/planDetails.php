<?php
include "../config.php";

// Decode the JSON input
$data = json_decode(file_get_contents("php://input"), true);
$planId = $data['planid'];
$userId = $data['userId'];

$response = [];

// 1. Get plan details
$planQuery = $conn->prepare("SELECT Title, Duration, DaysPerWeek, isDefault FROM Plans WHERE id = ?");
$planQuery->bind_param("i", $planId);
$planQuery->execute();
$planResult = $planQuery->get_result();

if ($planResult->num_rows === 0) {
    echo json_encode(["error" => "Plan not found."]);
    exit;
}

$planData = $planResult->fetch_assoc();

$response['title'] = $planData['Title'];
$response['duration'] = $planData['Duration'];
$response['workoutDays'] = $planData['DaysPerWeek'];
$response['isDefault'] = $planData['isDefault'];

// Get goals from Goals table
$goalsQuery = $conn->prepare("
    SELECT Exercise1Id, Exercise1Weight, Exercise2Id, Exercise2Weight, Exercise3Id, Exercise3Weight 
    FROM Goals 
    WHERE PlanID = ?
");
$goalsQuery->bind_param("i", $planId);
$goalsQuery->execute();
$goalsResult = $goalsQuery->get_result();

$goalData = $goalsResult->fetch_assoc();

$goalExercises = [];

if ($goalData) {
    $exerciseIds = [
        $goalData['Exercise1Id'],
        $goalData['Exercise2Id'],
        $goalData['Exercise3Id'],
    ];

    if (count(array_filter($exerciseIds))) {
        // Get names for all 3 exercises
        $placeholders = implode(',', array_fill(0, count($exerciseIds), '?'));
        $types = str_repeat('i', count($exerciseIds));

        $exerciseStmt = $conn->prepare("SELECT id, Name FROM Exercises WHERE id IN ($placeholders)");
        $exerciseStmt->bind_param($types, ...$exerciseIds);
        $exerciseStmt->execute();
        $exerciseResult = $exerciseStmt->get_result();

        $exerciseMap = [];
        while ($exercise = $exerciseResult->fetch_assoc()) {
            $exerciseMap[$exercise['id']] = $exercise['Name'];
        }

        // Now pair names with weights
        for ($i = 1; $i <= 3; $i++) {
            $idKey = "Exercise{$i}Id";
            $weightKey = "Exercise{$i}Weight";

            $exerciseId = $goalData[$idKey];
            if (isset($exerciseMap[$exerciseId])) {
                $goalExercises[] = $exerciseMap[$exerciseId] . " - Goal: " . $goalData[$weightKey];
            }
        }
    }
}

$response['goals'] = $goalExercises;


// 2. Get workouts associated with the plan
$workoutsQuery = $conn->prepare("SELECT id, Name FROM Workouts WHERE PlanID = ?");
$workoutsQuery->bind_param("i", $planId);
$workoutsQuery->execute();
$workoutsResult = $workoutsQuery->get_result();

$schedule = [];

while ($workout = $workoutsResult->fetch_assoc()) {
    $workoutId = $workout['id'];
    $dayName = $workout['Name'];

    // 3. Get exercises for each workout
    $exerciseQuery = $conn->prepare("
        SELECT 
            we.Sets, we.Reps, we.Weight,
            e.Name, e.BodyPart
        FROM WorkoutExercises we
        JOIN Exercises e ON we.ExerciseId = e.id
        WHERE we.WorkoutId = ?
    ");
    $exerciseQuery->bind_param("i", $workoutId);
    $exerciseQuery->execute();
    $exerciseResult = $exerciseQuery->get_result();

    $exercises = [];
    while ($exercise = $exerciseResult->fetch_assoc()) {
        $exercises[] = [
            "name" => $exercise["Name"],
            "BodyPart" => $exercise["BodyPart"],
            "sets" => $exercise["Sets"],
            "reps" => $exercise["Reps"],
            "lastWeight" => $exercise["Weight"],
        ];
    }

    $schedule[] = [
        "day" => $dayName,
        "exercises" => $exercises,
    ];
}

$response['schedule'] = $schedule;

// Send final response
header('Content-Type: application/json');
echo json_encode($response);
?>