<?php

//getting the user id finding the default plan id
//get first workout that is not completed
//get list of exercises associated with that workout

/*
ensure i have all this information returned like this
    id: "7",
    name: "Push Day",
    exercises: ["Bench Press", "Shoulder Press", "Tricep Extensions"],
    planName: activePlan?.title || "Default Plan",
*/


include '../config.php';
header('Content-Type: application/json');

// Step 0: Validate input
$userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;
if (!$userId) {
    echo json_encode(['error' => 'User ID is required']);
    exit;
}

// Step 1: Get the user's default plan
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

$planId = $plan['id'];
$planTitle = $plan['title'];

// Step 2: Get the first workout that is not completed
$sql = "SELECT id, Name FROM Workouts WHERE PlanId = ? AND Completed = 0 ORDER BY id ASC LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $planId);
$stmt->execute();
$result = $stmt->get_result();
$workout = $result->fetch_assoc();

if (!$workout) {
    echo json_encode(['error' => 'No incomplete workouts found for the plan']);
    exit;
}

$workoutId = $workout['id'];

// Step 3: Get exercises for this workout
$sql = "SELECT e.name 
        FROM WorkoutExercises we
        JOIN Exercises e ON we.ExerciseId = e.id
        WHERE we.WorkoutId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $workoutId);
$stmt->execute();
$result = $stmt->get_result();
$exerciseNames = [];

while ($row = $result->fetch_assoc()) {
    $exerciseNames[] = $row['name'];
}

// Step 4: Structure response
$response = [
    'id' => $workoutId,
    'name' => $workout['Name'],
    'exercises' => $exerciseNames,
    'planName' => $planTitle
];

echo json_encode($response);

?>