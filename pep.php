<?php
// Database connection
$conn = new mysqli("localhost", "DB_USERNAME", "DB_PASSWORD", "DB_NAME");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (!empty($_POST['answer'])) {
    $answer = $conn->real_escape_string($_POST['answer']);
    $conn->query("INSERT INTO answers (answer) VALUES ('$answer')");
}

$conn->close();

// Redirect back to form
header("Location: index.html");
exit();
?>
