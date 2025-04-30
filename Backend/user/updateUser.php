<?php

include '../config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Read JSON input
$data = json_decode(file_get_contents("php://input"), true);

// Validate input data
if (!isset($data['user_id'], $data['name'], $data['email'], $data['height'], $data['weight'], $data['dateOfBirth'])) {
    echo json_encode(["message" => "Missing required fields"]);
    exit;
}

// Sanitize input
$user_id = intval($data['user_id']);
$name = $conn->real_escape_string($data['name']);
$email = $conn->real_escape_string($data['email']);
$height = floatval($data['height']);
$weight = floatval($data['weight']);
$dateOfBirth = $conn->real_escape_string($data['dateOfBirth']);
$updated_at = date('Y-m-d H:i:s'); // Current timestamp

// Update query
$sql = "UPDATE User SET Name=?, Email=?, Height=?, Weight=?, DateOfBirth=?, updated_at=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ssdissi", $name, $email, $height, $weight, $dateOfBirth, $updated_at, $user_id);

if ($stmt->execute()) {
    echo json_encode(["message" => "User updated successfully"]);
} else {
    echo json_encode(["message" => "Failed to update user"]);
}

$stmt->close();
$conn->close();

?>
