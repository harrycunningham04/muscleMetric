<?php
include '../../config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$userId = $data['userid'] ?? null;
$newWorkoutCount = $data['newWorkoutCount'] ?? null;
$newSetsCompleted = $data['newSetsCompleted'] ?? null;
$newTotalWeight = $data['newTotalWeight'] ?? null;
$newAvgWorkoutTime = $data['newAvgWorkoutTime'] ?? null;

if (!$userId) {
    echo json_encode(['success' => false, 'error' => 'Missing userId']);
    exit;
}

$stmt = $conn->prepare("UPDATE Facts SET WorkoutsComplete = ?, SetsCompleted = ?, TotalWeight = ?, AvgWorkoutTime = ? WHERE UserId = ?");
$stmt->bind_param("iiisi", $newWorkoutCount, $newSetsCompleted, $newTotalWeight, $newAvgWorkoutTime, $userId);

if ($stmt->execute()) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to update facts']);
}

$stmt->close();
$conn->close();
?>
