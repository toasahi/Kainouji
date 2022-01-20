<?php
require_once 'DB/Data.php';
$moisture = $_POST['moisture'];
$temperature = $_POST['temperature'];
$humidity = $_POST['humidity'];
$airPressure = $_POST['air_pressure'];
$chipId = $_POST['chip_id'];
$dataHandle = new Data();

try{
    if(isset($chipId,$moisture,$temperature,$humidity,$airPressure)){
        $fieldId = $dataHandle->getFieldId($chipId);
        $dataHandle->createFieldData($chipId,$moisture,$temperature,$humidity,$airPressure,$fieldId[0]['id']);
    }else{
        print("error");
    }
}catch(Exception $e){
    die($e);
}