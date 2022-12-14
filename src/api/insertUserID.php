<?php
include "config.php";

$data = json_decode(file_get_contents("php://input"));

echo json_encode($data);
// $ID = mysqli_real_escape_string($connect, trim($data->ID));
// $userID = mysqli_real_escape_string($connect, trim($data->userID));


// $sql = "UPDATE `users` SET `account_id` = '$userID' WHERE `id` = '$ID' ";

// $result = mysqli_query($connect, $sql);

// echo json_encode($result);
