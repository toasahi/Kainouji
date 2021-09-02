<?php
require_once 'DB/Data.php';
$moisture = $_POST['moisture'];
$temerature = $_POST['temerature'];
$humidity = $_POST['humidity'];
$air_pressure = $_POST['air_pressure'];
echo $air_pressure;
echo $humidity;
echo $temerature;
$dataHandle = new Data();
// if(isset($moisture)){
//     $dataHandle->insertSoilMoisture($moisture);
// }