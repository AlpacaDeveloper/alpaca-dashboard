<?php
include "config.php";



$query = "SELECT * FROM `users`";

$result = mysqli_query($connect, $query);
$count = mysqli_num_rows($result);
echo json_encode($count);
