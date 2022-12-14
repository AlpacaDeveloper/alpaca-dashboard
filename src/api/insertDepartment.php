<?php
include "config.php";

$data = file_get_contents("php://input");

$position = mysqli_real_escape_string($connect, trim($data));


$sql = "INSERT INTO `department`(`value`) VALUES ('$position')";

$result = mysqli_query($connect, $sql);

echo json_encode($result);
