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
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * 畑のデータを登録する
     * @param int $moisture 土壌の水分量
     * @param int $temperature 気温
     * @param int $humidity 湿度
     * @param int $air_pressure 気圧
     * @param int $field_id 畑の識別ID
     * @param null $input_parameters
     * @return bool
     */

    public function insertFieldData($moisture,$temperature,$humidity,$air_pressure,$field_id,$input_parameters=NULL){
        $sql = "INSERT INTO datas (moisture,temperature,humidity,air_pressure,field_id) VALUES ('{$moisture}','{$temperature}','{$humidity}','{$air_pressure}','{$field_id}')";
        $stmt = $this->pdo->prepare($sql);
        return $stmt->execute($input_parameters);
    }

    public function createFieldData($chip_id,$moisture,$temperature,$humidity,$air_pressure,$field_id,$input_parameters=NULL){
        $sql = "select @detail_num := max(detail_no) +1 as detail_no from datas where field_id = {$field_id}";
        $this->pdo->prepare($sql);
        $sql = "insert into datas (field_id,detail_no,chip_id,moisture,humidity,temperature,air_pressure) values('{$field_id}',@detail_num,'{$chip_id}','{$moisture}','{$humidity}','{$temperature}','{$air_pressure}')";
        return $this->pdo->prepare($sql);
    }

}
