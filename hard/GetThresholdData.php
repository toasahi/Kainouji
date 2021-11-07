<?php
require_once 'DB/Data.php';
$dataHandle = new Data();

//モータの閾値を取得
$threshodData = $dataHandle->selectThresholdData(7);

echo json_encode($threshodData[0]);