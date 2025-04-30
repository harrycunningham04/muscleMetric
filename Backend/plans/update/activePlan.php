<?php

include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Get raw JSON input
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($data['userId']) || !isset($data['planId'])) {
        echo json_encode(['success' => false, 'error' => 'Missing userId or planId.']);
        exit;
    }

    $userId = intval($data['userId']);
    $planId = intval($data['planId']);

    // 1. Set all plans to isDefault = 0 for the user
    $resetStmt = $conn->prepare("UPDATE Plans SET isDefault = 0 WHERE userId = ?");
    $resetStmt->bind_param("i", $userId);

    if (!$resetStmt->execute()) {
        echo json_encode(['success' => false, 'error' => 'Failed to reset default plans: ' . $resetStmt->error]);
        $resetStmt->close();
        exit;
    }
    $resetStmt->close();

    // 2. Set the selected plan as default
    $setStmt = $conn->prepare("UPDATE Plans SET isDefault = 1 WHERE id = ? AND userId = ?");
    $setStmt->bind_param("ii", $planId, $userId);

    if ($setStmt->execute()) {
        echo json_encode(['success' => true, 'message' => 'Default plan set successfully.']);
    } else {
        echo json_encode(['success' => false, 'error' => 'Failed to set default plan: ' . $setStmt->error]);
    }

    $setStmt->close();
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

$conn->close();

?>
