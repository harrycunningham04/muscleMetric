<?php

include '../../config.php';

header('Content-Type: application/json');

// Get the raw POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data || !isset($data['WorkoutId']) || !isset($data['WorkoutTime'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$workoutId = intval($data['WorkoutId']);
$workoutTime = $data['WorkoutTime']; // Expected format: HH:MM:SS

// Use current server date
$date = date('Y-m-d');

// Prepare SQL
$sql = "INSERT INTO WorkoutHistory (WorkoutId, Duration, Date) VALUES (?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iss", $workoutId, $workoutTime, $date);

if ($stmt->execute()) {
    $historyId = $stmt->insert_id;
    echo json_encode(['success' => true, 'historyId' => $historyId]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to save workout history']);
}

$stmt->close();
$conn->close();

?>
