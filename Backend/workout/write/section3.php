<?php

include '../../config.php';
header('Content-Type: application/json');

// Decode the raw JSON input
$input = json_decode(file_get_contents('php://input'), true);
$userId = $input['userId'] ?? null;

if (!$userId) {
    echo json_encode(['success' => false, 'error' => 'Missing userId']);
    exit;
}

$stmt = $conn->prepare("SELECT * FROM Facts WHERE UserId = ?");
$stmt->bind_param("s", $userId);

if ($stmt->execute()) {
    $result = $stmt->get_result();
    $facts = [];

    while ($row = $result->fetch_assoc()) {
        $facts[] = $row;
    }

    echo json_encode(['success' => true, 'data' => $facts]);
} else {
    echo json_encode(['success' => false, 'error' => 'Failed to retrieve data']);
}

$stmt->close();
$conn->close();
?>
