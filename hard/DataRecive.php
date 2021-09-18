<?php
require_once 'DB/Data.php';
$moisture = $_GET['moisture'];
$temerature = $_GET['temerature'];
$humidity = $_GET['humidity'];
$air_pressure = $_GET['air_pressure'];
$dataHandle = new Data();
if(isset($moisture)){
    $dataHandle->insertFieldData($moisture,$temerature,$humidity,$air_pressure,6);
}else{
    print("error");
}