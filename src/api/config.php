<?php
    header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Origin');
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, PATCH, POST, OPTIONS');
    header('Content-Type: application/json');
    header('enctype: multipart/form-data');

    $username="alpaca_admin";//change username
    $password='Za9te#067'; //change password
    $host="localhost";
    $db_name="alpacathailand"; //change databasename

    $connect=mysqli_connect($host,$username,$password,$db_name);

    mysqli_set_charset($connect, "utf8");

    if(!$connect)
    {
        echo "Connection Failed";
    }

?>
