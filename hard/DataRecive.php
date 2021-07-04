<?php
require_once 'DB/Data.php';
$moisture = $_POST['moisture'];
$dataHandle = new Data();
if(isset($moisture)){
    $dataHandle->insertSoilMoisture($moisture);
}