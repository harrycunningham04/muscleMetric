<?php

require_once '../../config.php';

header('Content-Type: application/json');

$data = json_decode(file_get_contents("php://input"), true);

$userId = isset($data['user_id']) ? intval($data['user_id']) : 0;
$exerciseId = isset($data['exercise_id']) ? intval($data['exercise_id']) : 0;

if (!$userId || !$exerciseId) {
    echo json_encode(['error' => 'User ID and Exercise ID are required']);
    exit;
}

// Step 1: Get the user's default plan
$sql = "SELECT id, Duration, created_at FROM Plans WHERE UserId = ? AND isDefault = 1 LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$plan = $result->fetch_assoc();

if (!$plan) {
    echo json_encode(['error' => 'Default plan not found']);
    exit;
}

$planId = $plan['id'];
$duration = intval($plan['Duration']);
$startDate = new DateTime($plan['created_at']);

// Step 2: Get goal exercise IDs and target weights from Goals table
$sql = "SELECT Exercise1Id, Exercise2Id, Exercise3Id, Exercise1Weight, Exercise2Weight, Exercise3Weight
        FROM Goals WHERE PlanId = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $planId);
$stmt->execute();
$result = $stmt->get_result();
$goal = $result->fetch_assoc();

if (!$goal) {
    echo json_encode(['error' => 'No goals found for the plan']);
    exit;
}

$goalExerciseMap = [
    $goal['Exercise1Id'] => $goal['Exercise1Weight'],
    $goal['Exercise2Id'] => $goal['Exercise2Weight'],
    $goal['Exercise3Id'] => $goal['Exercise3Weight'],
];

if (!array_key_exists($exerciseId, $goalExerciseMap)) {
    echo json_encode(['message' => 'Not a goal exercise']);
    exit;
}

$goalWeight = floatval($goalExerciseMap[$exerciseId]);

// Step 3: Calculate final goal date
$lastDate = clone $startDate;
$lastDate->modify("+" . ($duration - 1) . " week");

// Step 4: Fetch starting weight from ExerciseStartingWeight table
$sql = "SELECT Weight FROM ExerciseStartingWeight WHERE planId = ? AND ExerciseId = ? LIMIT 1";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ii", $planId, $exerciseId);
$stmt->execute();
$result = $stmt->get_result();
$startingWeightRow = $result->fetch_assoc();

$startingWeight = $startingWeightRow ? floatval($startingWeightRow['Weight']) : null;

// Final Output
echo json_encode([
    'planId' => $planId,
    'date' => $lastDate->format('Y-m-d'),
    'targetWeight' => $goalWeight,
    'startingWeight' => $startingWeight,
    'duration' => $duration
]);

?>
