<?php
include "config.php";

$postData = file_get_contents("php://input");

$data = json_decode($postData);

$id = $data->id;
$name = $data->name; 
$surname = $data->surname; 
$username = $data->username;
$password = $data->password; 
$priority = $data->priority; 
$department = $data->department; 
$position = $data->position; 
$tel = $data->tel; 
$start_date = $data->start_date; 
$birthday = $data->birthday; 
$address = $data->address; 
$medical = $data->medical; 


 
$sql = "UPDATE `users` SET  
 `name`= '$name',
 `surname`= '$surname',
 `username`= '$username',
 `password`= '$password',
 `priority`= '$priority',
 `department`= '$department',
 `position`= '$position',
 `tel`= '$tel',
 `start_date`= '$start_date',
 `birthday`= '$birthday',
 `address`= '$address',
 `medical`= '$medical'   WHERE `id` = '$id'";
                                      

$result = mysqli_query($connect, $sql);

echo json_encode($data);
