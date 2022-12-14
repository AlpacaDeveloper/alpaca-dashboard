<?php
include "config.php";
// REGISTER USER

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);

// Sanitize.
$qt_id = mysqli_real_escape_string($connect, trim($request->quotation->quotation_id));
$dept = mysqli_real_escape_string($connect, trim($request->quotation->dept));
$address = mysqli_real_escape_string($connect, trim($request->quotation->address));
$company_id = mysqli_real_escape_string($connect, trim($request->quotation->company_id));
$condition = mysqli_real_escape_string($connect, trim($request->quotation->condition));
$amount = mysqli_real_escape_string($connect, trim($request->quotation->amount));
$vat = mysqli_real_escape_string($connect, trim($request->quotation->vat));
$total = mysqli_real_escape_string($connect, trim($request->quotation->total));
$total_text = mysqli_real_escape_string($connect, trim($request->quotation->total_text));
$date = new DateTime();
$date = $date->format('Y-m-d H:i:s');


$query = "INSERT INTO `quotation`(
    `qt_id`,
    `dept`,
    `address`,
    `condition_qt`,
    `company_id`,
    `amount`,
    `vat`,
    `total`,
    `total_text`,
    `created_at`,
    `modified_at`
)
VALUES(
   '$qt_id',
   '$dept',
   '$address',
   '$condition',
   '$company_id',
   '$amount',
   '$vat',
   '$total',
   '$total_text',
   '$date',
   '$date'
)";

for ($i = 0; $i < count($request->meta); $i++) {
    $one = $request->meta[$i]; 

    $desc = mysqli_real_escape_string($connect, trim($request->meta->desc));
    $amount = mysqli_real_escape_string($connect, trim($one->amount));
    $unit = mysqli_real_escape_string($connect, trim($one->unit));
    $ppu = mysqli_real_escape_string($connect, trim($one->ppu));
    $cost = mysqli_real_escape_string($connect, trim($one->cost));

    $query_meta = "INSERT INTO `quotation_meta`(
        `qt_id`,
        `index`,
        `desc`,
        `amount`,
        `unit`,
        `ppu`,
        `cost`,
        `created_at`,
        `modified_at`
        )
        VALUES(
       '$qt_id',
       '$index',
       '$desc',
       '$amount',
       '$unit',
       '$ppu',
       '$cost',
       '$date',
       '$date'
    )";
    $results = mysqli_query($connect, $query_meta);
}


$results = mysqli_query($connect, $query);

echo json_encode("true");
}