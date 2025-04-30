<?php

require_once '../../config.php'; // Your DB connection

$input = json_decode(file_get_contents("php://input"), true);

$exerciseId = $input['exercise_id'];
$userId = $input['user_id'];

$response = [];

// 1. Get default plan ID
$planQuery = $conn->prepare("SELECT id FROM Plans WHERE UserID = ? AND isDefault = 1 LIMIT 1");
$planQuery->bind_param("i", $userId);
$planQuery->execute();
$planResult = $planQuery->get_result();

if ($planResult->num_rows === 0) {
  echo json_encode([]);
  exit;
}

$planId = $planResult->fetch_assoc()['id'];

// 2. Get all workout IDs for the plan
$workoutQuery = $conn->prepare("SELECT id FROM Workouts WHERE PlanID = ?");
$workoutQuery->bind_param("i", $planId);
$workoutQuery->execute();
$workoutResult = $workoutQuery->get_result();

$workoutIds = [];
while ($row = $workoutResult->fetch_assoc()) {
  $workoutIds[] = $row['id'];
}

if (count($workoutIds) === 0) {
  echo json_encode([]);
  exit;
}

// 3. Get all workout history IDs for this user and these workouts
$inClause = implode(',', array_fill(0, count($workoutIds), '?'));
$types = str_repeat('i', count($workoutIds));
$params = array_merge( $workoutIds);

$historySql = "SELECT id, date FROM WorkoutHistory WHERE  WorkoutId IN ($inClause)";
$historyStmt = $conn->prepare($historySql);
$historyStmt->bind_param($types, ...$params);
$historyStmt->execute();
$historyResult = $historyStmt->get_result();

$history = [];
$historyIds = [];

while ($row = $historyResult->fetch_assoc()) {
  $historyIds[] = $row['id'];
  $history[$row['id']] = [
    "date" => $row['date'],
    "sets" => []
  ];
}

if (count($historyIds) === 0) {
  echo json_encode([]);
  exit;
}

// 4. Get historySets for the given exercise and these history IDs
$setInClause = implode(',', array_fill(0, count($historyIds), '?'));
$setTypes = str_repeat('i', count($historyIds) + 1);
$setParams = array_merge([$exerciseId], $historyIds);

$setSql = "SELECT HistoryId, Weight, Reps FROM HistorySets WHERE ExerciseId = ? AND HistoryId IN ($setInClause)";
$setStmt = $conn->prepare($setSql);
$setStmt->bind_param($setTypes, ...$setParams);
$setStmt->execute();
$setResult = $setStmt->get_result();

while ($row = $setResult->fetch_assoc()) {
  $historyId = $row['HistoryId'];
  if (isset($history[$historyId])) {
    $history[$historyId]['sets'][] = [
      'weight' => (float)$row['Weight'],
      'reps' => (int)$row['Reps']
    ];
  }
}

// 5. Format the response
$response = array_values($history);
usort($response, fn($a, $b) => strtotime($a['date']) <=> strtotime($b['date']));

echo json_encode($response);
?>
