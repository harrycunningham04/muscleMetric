<?php

include "../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$email = $conn->real_escape_string($data["email"]);
$password = $data["password"];

$result = $conn->query("SELECT id, password FROM User WHERE Email = '$email'");
if ($result->num_rows === 1) {
  $user = $result->fetch_assoc();
  if (password_verify($password, $user["password"])) {
    echo json_encode(["success" => true, "userId" => $user["id"]]);
  } else {
    echo json_encode(["success" => false, "error" => "Invalid password"]);
  }
} else {
  echo json_encode(["success" => false, "error" => "User not found"]);
}
?>
