<?php
include "config.php";
 
$query = "SELECT * FROM `closeTraineeJobApp`";

$result = mysqli_query($connect, $query);
 
while ($obj = mysqli_fetch_object($result)) {
    $res = $obj;
}

$send = $res->isopen;

echo json_encode($send);