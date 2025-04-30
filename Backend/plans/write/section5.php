<?php

include '../../config.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST");

error_log("Script started: Saving Exercise Starting Weights");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    error_log("Received POST request");

    $planId = isset($_POST['planId']) ? intval($_POST['planId']) : null;
    $exerciseWeights = isset($_POST['exerciseWeights']) ? json_decode($_POST['exerciseWeights'], true) : null;

    error_log("Plan ID: " . ($planId ?? 'Not Provided'));
    error_log("Exercise Weights Data: " . json_encode($exerciseWeights));

    if ($planId && is_array($exerciseWeights) && count($exerciseWeights) > 0) {
        $stmt = $conn->prepare("INSERT INTO ExerciseStartingWeight (planId, ExerciseId, Weight) VALUES (?, ?, ?)");

        foreach ($exerciseWeights as $entry) {
            $exerciseId = intval($entry['exerciseId']);
            $weight = floatval($entry['weight']);

            error_log("Inserting: PlanID=$planId, ExerciseID=$exerciseId, Weight=$weight");

            $stmt->bind_param("iid", $planId, $exerciseId, $weight);

            if (!$stmt->execute()) {
                error_log("Failed to insert row: " . $stmt->error);
                echo json_encode(['success' => false, 'error' => 'Insert failed: ' . $stmt->error]);
                $stmt->close();
                $conn->close();
                exit;
            }
        }

        $stmt->close();
        echo json_encode(['success' => true]);
        error_log("All exercise weights inserted successfully");
    } else {
        error_log("Invalid input: Missing planId or exerciseWeights");
        echo json_encode(['success' => false, 'error' => 'Invalid input data.']);
    }
} else {
    error_log("Invalid request method");
    echo json_encode(['success' => false, 'error' => 'Invalid request method.']);
}

$conn->close();
error_log("Script ended: Saving Exercise Starting Weights");

?>
