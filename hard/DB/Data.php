<?php

require_once("Database.php");

class Data extends Database
{

    /**
     * 土壌の水分量を追加
     * @param int $moisture
     * @return boolean $result
     */

    public function insertSoilMoisture($moisture, $input_parameters = NULL)
    {
        $sql = "INSERT INTO soil_moistures (moisture) VALUES ('{$moisture}')";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute($input_parameters);
        return $result;
    }

    /**
     * 土壌の水分量を取得
     * @return array|boolean $result
     */

    public function selectSoilMoisture($input_parameters = NULL)
    {
        $sql = "SELECT * FROM soil_moistures";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute($input_parameters);
        if (!$flag) {
            return false;
        }
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    /**
     * 空気中の湿度を追加
     * @param int $humidity
     * @return boolean $result
     */
    public function insertHumidity($humidity, $input_parameters = NULL)
    {
        $sql = "INSERT INTO humidities (humidity) VALUES ('{$humidity}')";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute($input_parameters);
        return $result;
    }

    /**
     * 空気中の湿度を取得
     * @return array|boolean $result
     */

    public function selectHumidity($input_parameters = NULL)
    {
        $sql = "SELECT * FROM humidities";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute($input_parameters);
        if (!$flag) {
            return false;
        }
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    /**
     * 空気中の温度を追加
     * @param int $temperature
     * @return boolean $result
     */
    public function insertTemperature($temperature, $input_parameters = NULL)
    {
        $sql = "INSERT INTO temperatures (temperature) VALUES ('{$temperature}')";
        $stmt = $this->pdo->prepare($sql);
        $result = $stmt->execute($input_parameters);
        return $result;
    }

    /**
     * 空気中の温度を取得
     * @return array|boolean $result
     */

    public function selectTemperature($input_parameters = NULL)
    {
        $sql = "SELECT * FROM temperatures";
        $stmt = $this->pdo->prepare($sql);
        $flag = $stmt->execute($input_parameters);
        if (!$flag) {
            return false;
        }
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    }

    
}
