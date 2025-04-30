<?php

include '../../config.php';
header('Content-Type: application/json');

// Get and decode the incoming JSON
$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data["WorkoutId"])) {
    echo json_encode(["success" => false, "error" => "Missing WorkoutId"]);
    exit;
}

$workoutId = $data["WorkoutId"];

// Prepare and execute update query
$sql = "UPDATE Workouts SET Completed = 1 WHERE id = ?";
$stmt = $conn->prepare($sql);

if (!$stmt) {
    echo json_encode(["success" => false, "error" => "Prepare failed"]);
    exit;
}

$stmt->bind_param("i", $workoutId);

if ($stmt->execute()) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "error" => "Execute failed"]);
}

$stmt->close();
$conn->close();

?>