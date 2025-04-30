<?php

include '../config.php';

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type');

// Get the user ID from the query string (using GET method)
$userId = isset($_GET['user_id']) ? $_GET['user_id'] : null;

if ($userId) {
    // Prepare the SQL query
    $sql = "SELECT TotalWeight, SetsCompleted, WorkoutsComplete, AvgWorkoutTime, WeeklyStreak 
            FROM Facts 
            WHERE UserId = ?";

    // Prepare and execute the query
    if ($stmt = $conn->prepare($sql)) {
        $stmt->bind_param("i", $userId); // "i" denotes an integer parameter
        $stmt->execute();
        $result = $stmt->get_result();

        // Check if any data is found
        if ($result->num_rows > 0) {
            $data = $result->fetch_assoc();
            echo json_encode($data);
        } else {
            echo json_encode(['message' => 'No data found for the provided UserId']);
        }

        $stmt->close();
    } else {
        echo json_encode(['message' => 'Error preparing statement']);
    }
} else {
    echo json_encode(['message' => 'UserId is required']);
}

$conn->close();

?>
