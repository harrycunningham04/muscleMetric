<?php

include '../config.php';

header('Content-Type: application/json');

$workoutId = isset($_GET['id']) ? intval($_GET['id']) : 0;

if (!$workoutId) {
    echo json_encode(['error' => 'Workout ID is required']);
    exit;
}

// Step 1: Get the workout name
$sql = "SELECT Name FROM Workouts WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $workoutId);
$stmt->execute();
$result = $stmt->get_result();
$workout = $result->fetch_assoc();

if (!$workout) {
    echo json_encode(['error' => 'Workout not found']);
    exit;
}

// Step 2: Get all exercise details for the workout
$sql = "SELECT we.*, e.* 
        FROM WorkoutExercises we
        JOIN Exercises e ON we.ExerciseId = e.id
        WHERE we.WorkoutId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $workoutId);
$stmt->execute();
$result = $stmt->get_result();
$exercises = $result->fetch_all(MYSQLI_ASSOC);

$response = [
    'workout' => [
        'id' => $workoutId,
        'name' => $workout['Name']
    ],
    'exercises' => $exercises
];

echo json_encode($response);

?>
