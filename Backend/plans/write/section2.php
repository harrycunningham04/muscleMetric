<?php

// Include the database configuration
include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Check if the required data is passed via POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $planId = isset($_POST['planId']) ? $_POST['planId'] : null;
    $workoutNames = isset($_POST['workoutNames']) ? json_decode($_POST['workoutNames'], true) : null;

    // Validate inputs
    if ($planId && $workoutNames && is_array($workoutNames)) {
        // Prepare the SQL query to insert workouts
        $workoutIds = [];

        // Loop through each workout name and insert it into the database
        foreach ($workoutNames as $workoutName) {
            $stmt = $conn->prepare("INSERT INTO Workouts (PlanID, Name, Completed) VALUES (?, ?, ?)");
            $completed = 0;  // Set completed to 0 for all new workouts
            $stmt->bind_param("isi", $planId, $workoutName, $completed);

            // Execute the query
            if ($stmt->execute()) {
                // Get the last inserted workoutId
                $workoutIds[] = $stmt->insert_id;
            } else {
                echo json_encode(['success' => false, 'error' => 'Failed to insert workout.']);
                exit;
            }

            // Close the statement
            $stmt->close();
        }

        // Return the created workoutIds
        echo json_encode(['success' => true, 'workoutIds' => $workoutIds]);
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid input data.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

// Close the database connection
$conn->close();

?>
