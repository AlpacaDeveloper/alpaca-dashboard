<?php
include "config.php";

$postdata = file_get_contents("php://input");

$data = json_decode($postdata);

$username = $data->username;
$password = $data->password;

$query = "SELECT * FROM users WHERE username='$username'";

$result = mysqli_query($connect, $query);

$obj = mysqli_fetch_object($result);

if ($obj != null) {
    $user = [];
    $user['title'] = $obj->title;
    $user['name'] = $obj->name;
    $user['surname'] = $obj->surname;
    $user['account_id'] = $obj->account_id;
    $user['personal_id'] = $obj->personal_id;
    $user['department'] = $obj->department;
    $user['position'] = $obj->position;
    $user['priority'] = $obj->priority;
    $user['tel'] = $obj->tel;
    $user['start_date'] = $obj->start_date;
    $user['birthday'] = $obj->birthday;
    $user['address'] = $obj->address;
    $user['medical'] = $obj->medical;
    $user['url'] = $obj->url;

    if ($password == $obj->password) {
        echo json_encode($user);
    } else {
        echo json_encode(false);
    }
} else {
    echo json_encode(false);
}
