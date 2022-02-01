<?php
require_once ("config/db_config.php");

class Database {
    public $pdo;
    private $option = [PDO::ATTR_EMULATE_PREPARES=>false];

    public function __construct(){
        try{
            $this->pdo = new PDO(DB_DNS,DB_USER,DB_PASS,$this->option);
            return $this->pdo;
        }catch(Exception $e){
            die($e);
        }
    }
}