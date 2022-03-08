<?php
include "config.php";

$postData = file_get_contents("php://input");

$data = json_decode($postData);

$id = $data->id;
$value = $data->isopen; 
 
$sql = "UPDATE `traineeposition` SET `isopen`= '$value' WHERE `id` = '$id'";

$result = mysqli_query($connect, $sql);

echo json_encode($result);