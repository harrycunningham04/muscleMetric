<?php

include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

error_log("===> Script started: Inserting Workout Exercises");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    error_log("Received POST request");

    // Read raw JSON input
    $input = file_get_contents("php://input");
    error_log("Raw JSON input: " . $input);

    // Decode JSON to associative array
    $parsed = json_decode($input, true);

    if (isset($parsed['workoutExercises']) && is_array($parsed['workoutExercises'])) {
        $data = $parsed['workoutExercises'];

        $errors = [];
        $count = 0;

        foreach ($data as $index => $entry) {
            error_log("Processing entry #$index: " . json_encode($entry));

            if (
                isset($entry['workoutId']) &&
                isset($entry['exerciseId']) &&
                isset($entry['sets']) &&
                isset($entry['reps']) &&
                isset($entry['startingWeight'])
            ) {
                $workoutId = intval($entry['workoutId']);
                $exerciseId = intval($entry['exerciseId']);
                $sets = intval($entry['sets']);
                $reps = intval($entry['reps']);
                $startingWeight = floatval($entry['startingWeight']);

                error_log("Preparing to insert: WorkoutID=$workoutId, ExerciseID=$exerciseId, Sets=$sets, Reps=$reps, Weight=$startingWeight");

                $stmt = $conn->prepare("INSERT INTO WorkoutExercises (WorkoutID, ExerciseID, Sets, Reps, Weight) VALUES (?, ?, ?, ?, ?)");
                if (!$stmt) {
                    $errors[] = ['exerciseId' => $exerciseId, 'error' => $conn->error];
                    error_log("Statement prepare failed: " . $conn->error);
                    continue;
                }

                $stmt->bind_param("iiiid", $workoutId, $exerciseId, $sets, $reps, $startingWeight);

                if (!$stmt->execute()) {
                    $errors[] = ['exerciseId' => $exerciseId, 'error' => $stmt->error];
                    error_log("Execution failed for ExerciseID=$exerciseId: " . $stmt->error);
                } else {
                    $count++;
                    error_log("Successfully inserted ExerciseID=$exerciseId");
                }

                $stmt->close();
            } else {
                $errors[] = ['error' => 'Invalid exercise data format.', 'entry' => $entry];
                error_log("Invalid data format for entry #$index: " . json_encode($entry));
            }
        }

        error_log("Total successful inserts: $count");
        error_log("Total failed inserts: " . count($errors));

        if (empty($errors)) {
            echo json_encode(['success' => true, 'message' => 'All exercises inserted successfully.']);
            error_log("Inserted ID: " . $conn->insert_id);
        } else {
            echo json_encode(['success' => false, 'message' => 'Some inserts failed.', 'errors' => $errors]);
        }

    } else {
        error_log("Invalid input: 'workoutExercises' missing or not an array");
        echo json_encode(['success' => false, 'error' => 'Invalid input data.']);
    }
} else {
    error_log("Invalid request method: Expected POST");
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

$conn->close();
error_log("===> Script ended");

?>
