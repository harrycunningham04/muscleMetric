<?php

include '../../config.php';
header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

// Validate input
if (!isset($data['WorkoutId']) || !isset($data['Exercises']) || !is_array($data['Exercises'])) {
    echo json_encode(['success' => false, 'message' => 'Invalid input']);
    exit;
}

$workoutId = $data['WorkoutId'];
$exercises = $data['Exercises'];


$response = [];
foreach ($exercises as $exercise) {
    if (
        isset($exercise['ExerciseId']) &&
        isset($exercise['Sets']) &&
        isset($exercise['Reps']) &&
        isset($exercise['Weight'])
    ) {
        $exerciseId = $exercise['ExerciseId'];
        $sets = $exercise['Sets'];
        $reps = $exercise['Reps'];
        $weight = $exercise['Weight'];

        $stmt = $conn->prepare("UPDATE WorkoutExercises SET Sets = ?, Reps = ?, Weight = ? WHERE WorkoutID = ? AND ExerciseId = ?");
        $stmt->bind_param("iiiii", $sets, $reps, $weight, $workoutId, $exerciseId);

        if ($stmt->execute()) {
            $response[] = ['ExerciseId' => $exerciseId, 'status' => 'updated'];
        } else {
            $response[] = ['ExerciseId' => $exerciseId, 'status' => 'error', 'message' => $stmt->error];
        }

        $stmt->close();
    } else {
        $response[] = ['status' => 'error', 'message' => 'Missing exercise data'];
    }
}

echo json_encode(['success' => true, 'results' => $response]);
$conn->close();
