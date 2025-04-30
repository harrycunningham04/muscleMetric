<?php

// Include the database configuration
include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Check if the required data is passed via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $title = isset($_POST['title']) ? $_POST['title'] : null;
    $duration = isset($_POST['duration']) ? $_POST['duration'] : null;
    $daysPerWeek = isset($_POST['DaysPerWeek']) ? $_POST['DaysPerWeek'] : null;
    $isDefault = isset($_POST['isDefault']) ? $_POST['isDefault'] : null;
    $userId = isset($_POST['userId']) ? $_POST['userId'] : null;

    // Validate inputs (this is a basic validation, you can add more checks as needed)
    if ($title && $duration && $daysPerWeek && $isDefault !== null && $userId) {
        
        // Prepare the SQL query
        $stmt = $conn->prepare("INSERT INTO Plans (Title, Duration, DaysPerWeek, isDefault, UserID) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("ssiii", $title, $duration, $daysPerWeek, $isDefault, $userId);

        // Execute the query
        if ($stmt->execute()) {
            // Get the last inserted plan ID
            $planId = $stmt->insert_id;

            // Return the generated plan ID to the frontend
            echo json_encode(['success' => true, 'planId' => $planId]);
        } else {
            echo json_encode(['success' => false, 'error' => 'Failed to insert the plan.']);
        }

        // Close the statement
        $stmt->close();
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid input data.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

// Close the database connection
$conn->close();

?>
