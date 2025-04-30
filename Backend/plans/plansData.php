<?php

//get all information from the plans table

include '../config.php';

header('Content-Type: application/json');

$userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;

if (!$userId) {
    echo json_encode(['error' => 'User ID is required']);
    exit;
}

$sql = "SELECT * FROM Plans WHERE UserId = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$plans = $result->fetch_all(MYSQLI_ASSOC);

if (!$plans) {
    echo json_encode(['error' => 'No plans found for the user']);
    exit;
}

$response = [
    'plans' => $plans,
];

echo json_encode($response);

?>
