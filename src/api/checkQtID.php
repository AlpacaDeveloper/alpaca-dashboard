<?php
include "config.php";

$today = $_GET['date'];
$dept = $_GET['dept'];

$start_date = date("Y-m-01", strtotime($today));


$end_date = date("Y-m-t", strtotime($today));

$query = "SELECT * FROM `quotation` WHERE `dept`='$dept' AND DATE(created_at) BETWEEN '$start_date' AND '$end_date' ";

$result = mysqli_query($connect, $query);
$count = mysqli_num_rows($result);
echo json_encode($count);