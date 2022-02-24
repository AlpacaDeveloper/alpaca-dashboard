<?php
include "config.php";

$data = file_get_contents("php://input");

$id = mysqli_real_escape_string($connect, trim($data));


$sql = "DELETE FROM `position` WHERE `id` = '$id'";

$result = mysqli_query($connect, $sql);

echo json_encode($result);
