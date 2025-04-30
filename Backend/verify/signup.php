<?php
// Connect to DB
include "../config.php";

// Decode the JSON body
$data = json_decode(file_get_contents("php://input"), true);

// Validate required fields
$required = ["name", "email", "password", "height", "weight", "gender", "dateOfBirth"];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(["success" => false, "error" => "Missing field: $field"]);
        exit;
    }
}

// Assign values and sanitize
$name = $data["name"];
$email = $data["email"];
$password = password_hash($data["password"], PASSWORD_BCRYPT);
$height = $data["height"];
$weight = $data["weight"];
$gender = $data["gender"];
$dateOfBirth = $data["dateOfBirth"]; // Format: YYYY-MM-DD

// Use prepared statement to insert into User table
$stmt = $conn->prepare("INSERT INTO User (Name, Email, Password, Height, Weight, Gender, DateOfBirth) VALUES (?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssddss", $name, $email, $password, $height, $weight, $gender, $dateOfBirth);

if ($stmt->execute()) {
    $userId = $stmt->insert_id;  // Get the newly inserted user ID
    
    // Now insert into the Facts table with the default values
    $stmt_facts = $conn->prepare("INSERT INTO Facts (UserId, TotalWeight, SetsCompleted, WorkoutsComplete, AvgWorkoutTime, WeeklyStreak) VALUES (?, 0, 0, 0, '00:00:00', 0)");
    $stmt_facts->bind_param("i", $userId);  // Bind the UserId (integer)

    if ($stmt_facts->execute()) {
        echo json_encode(["success" => true, "userId" => $userId]);
    } else {
        echo json_encode(["success" => false, "error" => "Failed to insert into Facts table: " . $stmt_facts->error]);
    }

    $stmt_facts->close();
} else {
    echo json_encode(["success" => false, "error" => $stmt->error]);
}

$stmt->close();
$conn->close();
?>
