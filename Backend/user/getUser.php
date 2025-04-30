<?php 

include '../config.php';

header('Content-Type: application/json');

// Check if UserID is provided
if (isset($_GET['user_id'])) {
    $user_id = intval($_GET['user_id']); // Ensure it's an integer to prevent SQL injection

    $sql = "SELECT Name, Email, Height, Weight, DateOfBirth FROM User WHERE id = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id); // Bind the parameter
    $stmt->execute();
    
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc(); // Fetch the single user row
        echo json_encode($user);
    } else {
        echo json_encode(["message" => "User not found"]);
    }

    $stmt->close();
} else {
    echo json_encode(["error" => "User ID not provided"]);
}

$conn->close();

?>
