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

$planId = $plan['id'];
$planName = $plan['title'];

// Step 2: Get the workouts associated with the plan
$sql = "SELECT id, name FROM Workouts WHERE PlanId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $planId);
$stmt->execute();
$result = $stmt->get_result();
$workouts = $result->fetch_all(MYSQLI_ASSOC);

// Create a mapping of workoutId => name
$workoutMap = [];
foreach ($workouts as $workout) {
    $workoutMap[$workout['id']] = $workout['name'];
}

$workoutIds = array_column($workouts, 'id');
if (empty($workoutIds)) {
    echo json_encode(['error' => 'No workouts found for the plan']);
    exit;
}

// Step 3: Get WorkoutHistory for those workout IDs
$placeholders = implode(',', array_fill(0, count($workoutIds), '?'));
$types = str_repeat('i', count($workoutIds));
$sql = "SELECT id, WorkoutId, duration, date FROM WorkoutHistory WHERE WorkoutId IN ($placeholders)";
$stmt = $conn->prepare($sql);
$stmt->bind_param($types, ...$workoutIds);
$stmt->execute();
$result = $stmt->get_result();
$histories = $result->fetch_all(MYSQLI_ASSOC);

// Step 4: For each history entry, get exercises from HistorySets
$data = [];

foreach ($histories as $history) {
    $historyId = $history['id'];
    $workoutId = $history['WorkoutId'];

    $sql = "SELECT ExerciseId FROM HistorySets WHERE HistoryId = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $historyId);
    $stmt->execute();
    $result = $stmt->get_result();
    $exerciseIds = $result->fetch_all(MYSQLI_ASSOC);

    $exerciseNames = [];
    foreach ($exerciseIds as $row) {
        $exerciseId = $row['ExerciseId'];
        $sql = "SELECT Name FROM Exercises WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $exerciseId);
        $stmt->execute();
        $res = $stmt->get_result();
        $exercise = $res->fetch_assoc();
        if ($exercise) {
            $exerciseNames[] = $exercise['Name'];
        }
    }

    $data[] = [
        'id' => $historyId,
        'planName' => $planName,
        'workoutName' => $workoutMap[$workoutId] ?? 'Unknown Workout',
        'duration' => $history['duration'],
        'date' => $history['date'],
        'exercises' => $exerciseNames
    ];
}

echo json_encode($data);

?>
