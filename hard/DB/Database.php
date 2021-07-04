<?php
require_once ("config/db_config.php");

class Database {
    public $pdo;

    public function __construct(){
        $this->pdo = new PDO(DB_DNS,DB_USER,DB_PASS);
        if($this->pdo === null){
            die("Connection Error:");
        }
        return $this->pdo;
    }
}