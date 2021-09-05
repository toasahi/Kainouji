<?php
require_once 'DB/Data.php';
// $moisture = $_POST['moisture'];
$moisture = $_GET['moisture'];
// $temerature = $_GET['temerature'];
// $humidity = $_GET['humidity'];
// $air_pressure = $_GET['air_pressure'];
// var_dump($_POST);
$dataHandle = new Data();
if(isset($moisture)){
    $dataHandle->insertSoilMoisture($moisture);
    $dataHandle->insertFieldData($moisture,$temerature,$humidity,$air_pressure,1);
}else{
    print("error");
}