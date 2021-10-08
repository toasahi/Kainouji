<?php
require_once 'DB/Data.php';
$dataHandle = new Data();

$chipId = $_GET['chip_id'];
//モータの閾値を取得
$threshodData = $dataHandle->selectThresholdData($chipId);

echo json_encode($threshodData[0]);