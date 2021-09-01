import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
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

export type User = {
  email: string;
  password: string;
  username?: string;
  status?: string;
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
 * 土壌の水分量を期間に応じて取得
 * @async
 * @returns rows
 */

export const getMoisturePeriod = async (id?: string, period?: string) => {
  const conn = await mysql.createConnection(dbSetting);
  let sql = '';
  switch (period) {
    case 'all':
      sql = `SELECT moisture as 水分量,created_at From soil_moistures where field_id = ${id}`;
      break;
    case 'one':
      sql = `SELECT moisture as 水分量,created_at From soil_moistures where field_id = ${id} && updated_at >= (NOW() - INTERVAL 7 DAY)`;
      break;
    case 'two':
      sql = `SELECT moisture as 水分量,created_at From soil_moistures where field_id = ${id} && updated_at >= (NOW() - INTERVAL 14 DAY)`;
      break;
  }
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 土壌の水分量を取得
 * @async
 * @returns rows
 */
export const getFieldMoisture = async (id?: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From soil_moistures where field_id = ${id}`;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

/**
 * 気温を期間に応じて取得
 * @async
 * @returns rows
 */

export const getTemperaturePeriod = async (id?: string, period?: string) => {
  const conn = await mysql.createConnection(dbSetting);
  let sql = '';
  switch (period) {
    case 'all':
      sql = `SELECT * From temperatures where field_id = ${id}`;
      break;
    case 'one':
      sql = `SELECT * From temperatures where field_id = ${id} && updated_at >= (NOW() - INTERVAL 7 DAY)`;
      break;
    case 'two':
      sql = `SELECT * From temperatures where field_id = ${id} && updated_at >= (NOW() - INTERVAL 14 DAY)`;
      break;
  }
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

export const insertVegetables = async () => {
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

export const insertField = async (data: Field) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `INSERT INTO fields(field_name,vegetable_id,setting_date,image_path) value('${data.field_name}','${
    data.vegetable_id
  }','${data.setting_date}','${data.image_path || ''}')`;
  const [rows, fields] = await conn.query(sql);
  return sql;
};

export const getField = async (userId:string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From fields where user_id = ${userId}`;
  const [rows, fields] = await conn.query(sql);
  return rows;
};

export const insertUser = async (data: User) => {
  const conn = await mysql.createConnection(dbSetting);
  let sql = `SELECT * FROM users WHERE email = '${data.email}' LIMIT 1`;
  const [rows, fields] = await conn.query(sql);
  let status:number;
  if (Object.keys(rows).length === 0) {
    const hashPass = bcrypt.hashSync(data.password,10);
    sql = `INSERT INTO users(email,password,username) value('${data.email}','${hashPass}','${data.username}')`;
    await conn.query(sql);
    status = 200;
  }else{
    status = 500;
  }
  return status;
};

/**
 * ユーザーのパスワードを取得
 * @param email メールアドレス
 * @returns rows
 */

const getPassword = async(email:string) =>{
  const conn = await mysql.createConnection(dbSetting);
  const sql = "SELECT password FROM users WHERE email = '${data.email}' LIMIT 1";
  const [rows, fields] = await conn.query(sql);
  return rows;
}


export const getUser = async(email:string,password:string) => {
  const conn = await mysql.createConnection(dbSetting);
  getPassword(email).then((result)=>{
    // const hashPass = result.password;
  })
}

