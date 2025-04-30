<?php

/*
Returns default plan id, title

Workouts id, name

Exercises, Id, Name, WorkoutId, Sets, Reps, Weight
*/

include '../config.php';

header('Content-Type: application/json');

$userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;

if (!$userId) {
    echo json_encode(['error' => 'User ID is required']);
    exit;
}

// Step 1: Get the default plan for the user
$sql = "SELECT id, title FROM Plans WHERE UserId = ? AND isDefault = 1 LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$plan = $result->fetch_assoc();

if (!$plan) {
    echo json_encode(['error' => 'No default plan found for the user']);
    exit;
}

// Step 2: Get the workouts associated with the plan
$planId = $plan['id'];
$sql = "SELECT id, Name FROM Workouts WHERE PlanId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $planId);
$stmt->execute();
$result = $stmt->get_result();
$workouts = $result->fetch_all(MYSQLI_ASSOC);

if (empty($workouts)) {
    echo json_encode(['error' => 'No workouts found for the plan']);
    exit;
}

// Step 3: Get the exercises linked to the workouts
$workoutIds = array_column($workouts, 'id');

$exercises = [];

if (!empty($workoutIds)) {
    $placeholders = implode(',', array_fill(0, count($workoutIds), '?'));
    $types = str_repeat('i', count($workoutIds));

    $sql = "SELECT e.id AS id, e.name, we.WorkoutId, we.sets, we.reps, we.weight
            FROM WorkoutExercises we
            JOIN Exercises e ON we.ExerciseId = e.id
            WHERE we.WorkoutId IN ($placeholders)";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param($types, ...$workoutIds);
    $stmt->execute();
    $result = $stmt->get_result();
    $allExercises = $result->fetch_all(MYSQLI_ASSOC);

    // De-duplicate exercises by ID
    $seen = [];
    foreach ($allExercises as $exercise) {
        if (!isset($seen[$exercise['id']])) {
            $seen[$exercise['id']] = [
                'id' => $exercise['id'],
                'name' => $exercise['name']
            ];
        }
    }

    $exercises = array_values($seen); // Reset array keys
}


$response = [
    'plan' => $plan,
    'workouts' => $workouts,
    'exercises' => $exercises
];

echo json_encode($response);
?>