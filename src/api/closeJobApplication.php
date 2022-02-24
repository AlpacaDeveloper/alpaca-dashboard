<?php
include "config.php";

$postData = file_get_contents("php://input");

if ($postData == 'true') {
    $postData = 1;
} else {
    $postData = 0;
}
$value = $postData; 
 
$sql = "UPDATE `closeJobApp` SET `isopen`= '$value' WHERE `id` = '1'";

$result = mysqli_query($connect, $sql);

echo json_encode($result);
