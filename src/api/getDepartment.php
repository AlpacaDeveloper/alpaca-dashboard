<?php
include "config.php";


$query = "SELECT * FROM `department`";

$result = mysqli_query($connect, $query);

$res = [];
while ($obj = mysqli_fetch_object($result)) {
    $res[] = $obj;
}

echo json_encode($res);