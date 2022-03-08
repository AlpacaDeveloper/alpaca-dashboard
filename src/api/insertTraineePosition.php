<?php
include "config.php";

$data = file_get_contents("php://input");

$traineeposition = mysqli_real_escape_string($connect, trim($data));



$sql = "INSERT INTO `traineeposition`(`value`, `isopen`) VALUES ('$traineeposition',0)";

$result = mysqli_query($connect, $sql);

echo json_encode($result);