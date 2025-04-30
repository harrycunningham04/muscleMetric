<?php

include 'config.php';
header('Content-Type: application/json');

// Get the current week number and year
$currentWeek = date('W');
$currentYear = date('Y');

// Calculate the previous week number and year
$previousWeek = $currentWeek - 1;
$year = $currentYear;

// Handle case where it's the first week of the year
if ($previousWeek < 1) {
    $previousWeek = 52;
    $year -= 1;
}

// Get all users
$userQuery = "SELECT id FROM User";
$userResult = $conn->query($userQuery);

if ($userResult->num_rows > 0) {
    while ($user = $userResult->fetch_assoc()) {
        $userId = $user['id'];

        // Fetch the default plan for this user
        $planQuery = "SELECT id FROM Plans WHERE UserId = $userId AND IsDefault = 1 LIMIT 1";
        $planResult = $conn->query($planQuery);

        // If default plan exists, proceed
        if ($planResult->num_rows > 0) {
            $plan = $planResult->fetch_assoc();
            $planId = $plan['id'];

            // Fetch all workouts for this plan in the previous week
            $workoutQuery = "
                SELECT Completed 
                FROM Workouts 
                WHERE PlanId = $planId 
            ";
            $workoutResult = $conn->query($workoutQuery);

            $allCompleted = true;

            // Check if all workouts were completed
            if ($workoutResult->num_rows > 0) {
                while ($row = $workoutResult->fetch_assoc()) {
                    if ((int)$row['Completed'] !== 1) {
                        $allCompleted = false;
                        break;
                    }
                }
            } else {
                // No workouts means streak should reset
                $allCompleted = false;
            }

            // Update WeeklyStreak accordingly
            if ($allCompleted) {
                $conn->query("UPDATE Facts SET WeeklyStreak = WeeklyStreak + 1 WHERE UserId = $userId");
            } else {
                $conn->query("UPDATE Facts SET WeeklyStreak = 0 WHERE UserId = $userId");
            }
        }
    }
}

// Reset all workouts for the new week
$conn->query("UPDATE Workouts SET Completed = 0");

// Return success response
echo json_encode([
    "success" => true,
    "message" => "Weekly streaks checked and workouts reset.",
]);

?>
