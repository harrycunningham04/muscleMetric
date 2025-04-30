<?php

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
$sql = "SELECT * FROM Workouts WHERE PlanId = ?";
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

if (!empty($workoutIds)) {
    $placeholders = implode(',', array_fill(0, count($workoutIds), '?'));
    $types = str_repeat('i', count($workoutIds));

    $sql = "SELECT we.*, e.* 
    FROM WorkoutExercises we
    JOIN Exercises e ON we.ExerciseId = e.id
    WHERE we.WorkoutId IN ($placeholders)";

    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param($types, ...$workoutIds);
    $stmt->execute();
    $result = $stmt->get_result();
    $exercises = $result->fetch_all(MYSQLI_ASSOC);
} else {
    $exercises = [];
}

$response = [
    'plan' => $plan,
    'workouts' => $workouts,
    'exercises' => $exercises
];

echo json_encode($response);

?>