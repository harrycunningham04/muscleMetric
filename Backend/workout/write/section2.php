<?php

include '../../config.php';
header('Content-Type: application/json');

// Get raw POST body
$rawInput = file_get_contents('php://input');
error_log("🔵 RAW INPUT:\n" . $rawInput);

// Decode JSON
$data = json_decode($rawInput, true);
error_log("🟢 PARSED INPUT:\n" . print_r($data, true));

if (!$data || !isset($data['historyId']) || !isset($data['sets']) || !is_array($data['sets'])) {
    error_log("❌ Invalid input");
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$historyId = intval($data['historyId']);
$sets = $data['sets'];

// Prepare SQL statement
$sql = "INSERT INTO HistorySets (HistoryId, ExerciseId, SetNumber, Reps, Weight) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    error_log("❌ Failed to prepare SQL statement: " . $conn->error);
    echo json_encode(['success' => false, 'message' => 'Failed to prepare statement']);
    exit;
}

foreach ($sets as $index => $set) {
    if (!isset($set['ExerciseId'], $set['SetNumber'], $set['Reps'], $set['Weight'])) {
        error_log("⚠️ Skipping invalid set at index $index: " . print_r($set, true));
        continue;
    }

    $exerciseId = intval($set['ExerciseId']);
    $setNumber = intval($set['SetNumber']);
    $reps = intval($set['Reps']);
    $weight = floatval($set['Weight']);

    error_log("📥 Inserting Set $index: HistoryId=$historyId, ExerciseId=$exerciseId, SetNumber=$setNumber, Reps=$reps, Weight=$weight");

    $stmt->bind_param("iiiid", $historyId, $exerciseId, $setNumber, $reps, $weight);
    $success = $stmt->execute();

    if (!$success) {
        error_log("❌ MySQL Error on insert: " . $stmt->error);
    }
}

$stmt->close();
$conn->close();

echo json_encode(['success' => true, 'message' => 'Sets saved']);
