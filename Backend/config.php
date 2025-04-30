<?php
$servername = "localhost:3306";
$username = "hc920_muscleMetric";
$password = "muscleMetric";
$dbname = "hc920_muscleMetric";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>