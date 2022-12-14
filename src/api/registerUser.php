<?php
include "config.php";
// REGISTER USER

$postdata = $_REQUEST['data'];
$image = $_FILES['file'];


// Extract the data.
$request = json_decode($postdata);

// Sanitize.
$title = mysqli_real_escape_string($connect, trim($request->title));
$name = mysqli_real_escape_string($connect, trim($request->name));
$surname = mysqli_real_escape_string($connect, trim($request->surname));
$dept = mysqli_real_escape_string($connect, trim($request->dept));
$pos = mysqli_real_escape_string($connect, trim($request->pos));
$personal_id = mysqli_real_escape_string($connect, trim($request->personal_id));
$tel = mysqli_real_escape_string($connect, trim($request->tel));
$start_date = mysqli_real_escape_string($connect, trim($request->start_date));
$birthday = mysqli_real_escape_string($connect, trim($request->birthday));
$address = mysqli_real_escape_string($connect, trim($request->address));
$medical = mysqli_real_escape_string($connect, trim($request->medical));

$query = "INSERT INTO `users`(
            `title`,
            `name`,
            `surname`,
            `department`,
            `position`,
            `personal_id`,
            `tel`,
            `start_date`,
            `birthday`,
            `address`,
            `medical`
        )
        VALUES(
            '$title',
           '$name',
           '$surname',
           '$dept',
           '$pos',
           '$personal_id',
           '$tel',
           '$start_date',
           '$birthday',
           '$address',
           '$medical'
        )";
$results = mysqli_query($connect, $query);

$date = new DateTime();
$date = $date->format('y');
$insert_id = strval(mysqli_insert_id($connect));

$new_insert_id = str_pad($insert_id, 2, "0", STR_PAD_LEFT);

$account_id = $date . $new_insert_id;
$username = 'AP' . $date . $new_insert_id;



// echo json_encode(mysqli_query($connect, $sql));


$target_dir = "../userImages/";
if (!file_exists($target_dir)) {
    mkdir($target_dir, 0755, true);
}
$new_dir = $target_dir . $insert_id . '/';

if (!file_exists($new_dir)) {
    mkdir($new_dir, 0755, true);
}

if ($image) {

    $tmpPath = $image['name'];
    $filepath = $new_dir . $tmpPath;

    if (move_uploaded_file($image['tmp_name'], $filepath)) {
        $sql = "UPDATE `users` SET `account_id` = '$account_id', `username` = '$username', `url`='$filepath' WHERE `id` = '$insert_id' ";

        echo json_encode(mysqli_query($connect, $sql));
    } else {
        echo json_encode(false);
    }
}
