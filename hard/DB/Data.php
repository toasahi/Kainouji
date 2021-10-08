<?php

require_once("Database.php");

class Data extends Database
{

    /**
     * データの閾値を取得する
     * @param string $id
     * @return array $result
     */
    public function selectThresholdData($id,$input_parameters = NULL){
        $sql = "SELECT moisture,temperature_high,temperature_low,air_pressure FROM thresholds WHERE id = '$id'";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute($input_parameters);
        if(!$flag){
            return false;
        }
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
    
    /**
     * 畑のデータを登録する
     * @param int $moisture 土壌の水分量
     * @param int $temperature 気温
     * @param int $humid 湿度
     * @param int $air_pressure 気圧
     * @param int $field_id 畑の識別ID
     */

    public function insertFieldData($moisture,$temperature,$humidity,$air_pressure,$field_id,$input_parameters=NULL){
        $sql = "INSERT INTO datas (moisture,temperature,humidity,air_pressure,field_id) VALUES ('{$moisture}','{$temperature}','{$humidity}','{$air_pressure}','{$field_id}')";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute($input_parameters);
        return $result;
    }

    /**
     * データの閾値を取得する
     * @param string $id
     * @return array $result
     */
    public function selectThresholdData2($id,$input_parameters = NULL){
        $sql = "SELECT moisture,temperature_high,temperature_low,air_pressure FROM thresholds WHERE id = '$id'";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute($input_parameters);
        if(!$flag){
            return false;
        }
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }
}
