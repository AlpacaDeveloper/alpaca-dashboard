<?php
include "config.php";

$data = file_get_contents("php://input");

$id = $_GET['id'];

$query = "SELECT * FROM `users` WHERE `account_id` = '$id'  ";

$result = mysqli_query($connect, $query);

$obj = mysqli_fetch_object($result);
echo json_encode($obj);