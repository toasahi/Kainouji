<?php
require_once 'DB/Data.php';
$moisture = $_GET['moisture'];
$temerature = $_GET['temerature'];
$humidity = $_GET['humidity'];
$airPressure = $_GET['air_pressure'];
$chipId = $_GET['chip_id'];
$dataHandle = new Data();
try{
    if(isset($moisture,$temerature,$humidity,$airPressure,$chipId)){
        $dataHandle->insertFieldData($moisture,$temerature,$humidity,$airPressure,$chipId);
    }else{
        print("error");
    }
}catch(Exception $e){
    die($error);
}
