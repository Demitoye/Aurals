<?php
// (A) SETTINGS - CHANGE TO YOUR OWN !
$servername = "localhost";
$username = "u666203437_aurals_tech";
$password = "?WeAreAurals1@2%3#";
$dbname = "u666203437_Aurals";

// (B) CONNECT TO DATABASE

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// (C) Upload Emails

$sql = "INSERT INTO `Waitlist` (`id`, `emails`) VALUES (NULL, $_POST["email"])";
if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

// (D) CLOSE DATABASE CONNECTION

$conn->close();
?>
