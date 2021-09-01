<?php
// 文字コード設定
header('Content-Type: application/json; charset=UTF-8');
require_once 'DB/Data.php';
$dataHandle = new Data();

$email = $_POST['email'];
$user_name = $_POST['user_name'];
$password = $_POST['password'];

$result = array();

// numが存在するかつnumが数字のみで構成されているか
if(isset($email,$user_name,$password)) {
   $result['result'] = $dataHandle->signUpDatabase($email,$user_name,$password);
   $result['status'] = '200';
} else {
    $result['status'] = '500';
}


print json_encode($result, JSON_PRETTY_PRINT);