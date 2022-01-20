<?php
require_once 'DB/Data.php';
$moisture = $_POST['moisture'];
$temperature = $_POST['temperature'];
$humidity = $_POST['humidity'];
$airPressure = $_POST['air_pressure'];
$chipId = $_POST['chip_id'];
$dataHandle = new Data();
try{
    if(isset($moisture,$temperature,$humidity,$airPressure,$chipId)){
        $dataHandle->insertFieldData($moisture,$temperature,$humidity,$airPressure,$chipId);
    }else{
        print("error");
    }
}catch(Exception $e){
    die($e);
}
