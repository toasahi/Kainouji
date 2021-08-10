import mysql from 'mysql2/promise';
import { Setting } from '../setting';

type Setting = {
  host: string;
  user: string;
  password: string;
  database: string;
  dateStrings: boolean;
};

export type Threshold = {
  moisture: number;
  temperature_high: number;
  temperature_low: number;
  humidity_high: number;
  humidity_low: number;
  air_pressure: number;
};

export type Field = {
  field_name: string;
  vegetable_id: string;
  setting_date: string;
  image_path?: string;
};

const dbSetting: Setting = {
  host: Setting.MYSQL_HOST,
  user: Setting.MYSQL_USER,
  password: Setting.MYSQL_PASSWORD,
  database: Setting.MYSQL_HOST_DATABASE,
  dateStrings: true,
};

/**
 * 土壌の水分量を取得
 * @async
 * @returns rows
 */
export const getMoisture = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'SELECT * From soil_moistures';
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 土壌の水分量を取得
 * @async
 * @returns rows
 */
export const getFieldMoisture = async (id?: string) => {
  console.log(id);
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From soil_moistures where field_id = ${id}`;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 閾値の更新
 * @async
 * @returns rows
 */

export const editThreshold = async (threshold: Threshold) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `UPDATE thresholds SET 
                moisture = ${threshold.moisture},
                temperature_high = ${threshold.temperature_high},
                temperature_low = ${threshold.temperature_low},
                humidity_high = ${threshold.humidity_high},
                humidity_low = ${threshold.humidity_low},
                air_pressure = ${threshold.air_pressure}
                WHERE id = 1
              `;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 閾値の取得
 * @async
 * @returns rows
 */

export const getThreshold = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'SELECT * From thresholds';
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 登録されている野菜取得
 * @async
 * @returns rows
 */

export const getVegetables = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'SELECT id,vegetable From vegetables';
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 野菜の追加処理
 * @async
 * @returns rows
 */

export const InsertVegetables = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT vegetable From vegetables Where`;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 畑の追加処理
 * @async
 * @returns rows
 */

export const InsertField = async (data: Field) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `INSERT INTO fields(field_name,vegetable_id,setting_date,image_path) value('${data.field_name}','${
    data.vegetable_id
  }','${data.setting_date}','${data.image_path || ''}')`;
  const [rows, fields] = await conn.query(sql);
  return sql;
};

export const getField = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'SELECT * From fields';
  const [rows, fields] = await conn.query(sql);
  return rows;
};
