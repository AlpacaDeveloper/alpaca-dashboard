<?php
include "config.php";

$postData = file_get_contents("php://input");

$data = json_decode($postData);

$id = $data->data->id;
$password = $data->password;
 
$sql = "UPDATE `users` SET `password`= '$password' WHERE `id` = '$id'";

$result = mysqli_query($connect, $sql);

echo json_encode($result);
