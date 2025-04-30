<?php
// Include database configuration
include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

// Log that the script is starting
error_log("Script started: Saving Goals");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Log the request method
    error_log("Received POST request");

    // Check if 'planId' is passed in POST
    $planId = isset($_POST['planId']) ? $_POST['planId'] : null;
    error_log("Plan ID: " . ($planId ? $planId : 'Not Provided'));

    // Check if 'exercises' is passed in POST and decode it
    $exercises = isset($_POST['goals']) ? json_decode($_POST['goals'], true) : null;
    error_log("Exercises Data: " . print_r($exercises, true));

    // Validate that 'planId' and 'exercises' exist
    if ($planId && $exercises && count($exercises) == 3) {
        error_log("Valid planId and exercises received");

        // Initialize arrays to store exerciseIds and weights
        $exerciseIds = [];
        $weights = [];

        // Loop through each exercise to fetch the exerciseId
        foreach ($exercises as $exercise) {
            $exerciseName = $exercise['exerciseName'];
            $startingWeight = $exercise['weight'];

            // Log the exercise being processed
            error_log("Processing exercise: $exerciseName with weight $startingWeight");

            // Search for the exerciseId based on the exercise name
            $stmt = $conn->prepare("SELECT id FROM Exercises WHERE Name = ?");
            $stmt->bind_param("s", $exerciseName);
            $stmt->execute();
            $result = $stmt->get_result();

            // Log the result of the query
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $exerciseIds[] = $row['id'];
                $weights[] = $startingWeight;
                error_log("Found exercise: $exerciseName, ID: " . $row['id']);
            } else {
                // Log if the exercise is not found
                error_log("Exercise '$exerciseName' not found in the database.");
                echo json_encode(['success' => false, 'error' => "Exercise '$exerciseName' not found."]);
                exit;
            }

            $stmt->close();
        }

        // Log the exerciseIds and weights to be inserted
        error_log("Exercise IDs: " . print_r($exerciseIds, true));
        error_log("Exercise Weights: " . print_r($weights, true));

        // Prepare the SQL query to insert into the Goals table
        $stmt = $conn->prepare("
            INSERT INTO Goals (PlanID, Exercise1Id, Exercise1Weight, Exercise2Id, Exercise2Weight, Exercise3Id, Exercise3Weight)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        ");

        // Bind the parameters
        $stmt->bind_param(
            "iiiiiii",
            $planId,
            $exerciseIds[0], $weights[0],
            $exerciseIds[1], $weights[1],
            $exerciseIds[2], $weights[2]
        );

        // Log the SQL query before execution
        error_log("Executing SQL Insert: " . $stmt->error);

        // Execute the query and log the outcome
        if ($stmt->execute()) {
            error_log("Goals inserted successfully");
            echo json_encode(['success' => true]);
        } else {
            error_log("SQL Error during insertion: " . $stmt->error);
            echo json_encode(['success' => false, 'error' => 'Failed to insert goals.']);
        }

        $stmt->close();
    } else {
        error_log("Invalid input: Plan ID or Exercises are missing or incorrect");
        echo json_encode(['success' => false, 'error' => 'Invalid input data or incorrect number of exercises.']);
    }
} else {
    error_log("Invalid request method. Expected POST.");
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

// Close the database connection
$conn->close();
error_log("Script ended: Saving Goals");

?>
