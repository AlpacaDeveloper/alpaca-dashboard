<?php
include "config.php";
// REGISTER USER

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);

    // Sanitize.
    $memo_id = mysqli_real_escape_string($connect, trim($request->memoID));
    $dept = mysqli_real_escape_string($connect, trim($request->dept));
    // $age = $request->age;
    $subject = mysqli_real_escape_string($connect, trim($request->subject));
    $requested_by = mysqli_real_escape_string($connect, trim($request->from));
    $reason = mysqli_real_escape_string($connect, trim($request->for));
    $notes = mysqli_real_escape_string($connect, trim($request->content));

    $date = new DateTime();
    $date = $date->format('Y-m-d H:i:s');


    $query = "INSERT INTO `memo`(
            `memo_id`,
            `dept`,
            `subject`,
            `requested_by`,
            `reason`,
            `notes`, 
            `created_at`,
            `modified_at`
        )
        VALUES(
           '$memo_id',
           '$dept',
           '$subject',
           '$requested_by',
           '$reason',
           '$notes',
           '$date',
           '$date'
        )";
    $results = mysqli_query($connect, $query);

    echo json_encode($results);
}
