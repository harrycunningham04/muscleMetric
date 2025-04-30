<?php

include '../config.php';
header('Content-Type: application/json');

$historyId = isset($_GET['history_id']) ? intval($_GET['history_id']) : 0;

if (!$historyId) {
    echo json_encode(['error' => 'History ID is required']);
    exit;
}

// Step 1: Get info from WorkoutHistory table
$sql = "SELECT * FROM WorkoutHistory WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $historyId);
$stmt->execute();
$result = $stmt->get_result();
$history = $result->fetch_assoc();

if (!$history) {
    echo json_encode(['error' => 'Workout history not found']);
    exit;
}

$workoutId = $history['WorkoutId'];

// Step 2: Get workout name and plan ID from Workouts table
$sql = "SELECT name, PlanId FROM Workouts WHERE id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $workoutId);
$stmt->execute();
$result = $stmt->get_result();
$workout = $result->fetch_assoc();

$workoutName = $workout['name'] ?? 'Unknown Workout';
$planId = $workout['PlanId'] ?? null;

// Step 3: Get plan title using plan ID
$planTitle = null;
if ($planId) {
    $sql = "SELECT title FROM Plans WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $planId);
    $stmt->execute();
    $result = $stmt->get_result();
    $plan = $result->fetch_assoc();
    $planTitle = $plan['title'] ?? null;
}

// Step 4: Get history sets from HistorySets table
$sql = "SELECT * FROM HistorySets WHERE HistoryId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $historyId);
$stmt->execute();
$result = $stmt->get_result();
$historySets = $result->fetch_all(MYSQLI_ASSOC);

// Step 5: Get exercise names for each set
foreach ($historySets as &$set) {
    $exerciseId = $set['ExerciseId'];
    $sql = "SELECT Name FROM Exercises WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $exerciseId);
    $stmt->execute();
    $res = $stmt->get_result();
    $exercise = $res->fetch_assoc();
    $set['ExerciseName'] = $exercise['Name'] ?? 'Unknown Exercise';
}

$response = [
    'history' => $history,
    'workoutName' => $workoutName,
    'planTitle' => $planTitle,
    'sets' => $historySets
];

echo json_encode($response);

?>
