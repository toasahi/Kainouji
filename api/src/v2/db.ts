import mysql from 'mysql2/promise';
import bcrypt from 'bcrypt';
import { Field, Setting, User } from 'types/type';

const dbSetting: Setting = {
  host: process.env.MYSQL_HOST!,
  user: process.env.MYSQL_USER!,
  password: process.env.MYSQL_PASSWORD!,
  database: process.env.MYSQL_HOST_DATABASE!,
  dateStrings: true,
};

/**
 * 閾値の更新
 * @async
 * @returns rows
 */

export const editThreshold = async (field_id: string, moisture: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `UPDATE thresholds SET moisture = ? WHERE field_id = ?`;
  const [rows, fields] = await conn.query(sql, [moisture, field_id]);
  return rows;
};

/**
 * 閾値の登録
 * @async
 * @param string field_id
 * @returns rows
 */

export const insertThreshold = async (field_id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `INSERT INTO thresholds (field_id) values (?)`;
  const [rows, fields] = await conn.query(sql, [field_id]);
  return rows;
};

/**
 * 閾値の取得
 * @async
 * @param string field_id
 * @returns rows
 */

export const getThreshold = async (field_id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From thresholds WHERE field_id = ?`;
  const [rows, fields] = await conn.query(sql, [field_id]);
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

export const getDetailVegetable = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'SELECT vegetable From vegetables Where id = ?';
  const [rows, fields] = await conn.query(sql, [id]);
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
  let sql = '';
  if (data.image_name !== '') {
    sql = `INSERT INTO fields(user_id,field_name,vegetable_id,setting_date,image_name) value(?,?,?,?,?)`;
  } else {
    sql = `INSERT INTO fields(user_id,field_name,vegetable_id,setting_date) value(?,?,?,?)`;
  }
  const [rows, fields] = await conn.query(sql, [
    data.user_id,
    data.field_name,
    data.vegetable_id,
    data.setting_date,
    data.image_name,
  ]);
  return rows;
};

/**
 * 登録されている畑を取得
 * @param userId
 * @returns
 */

export const getField = async (user_id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From fields where user_id = ?`;
  const [rows, fields] = await conn.query(sql, [user_id]);
  return rows;
};

/**
 * 登録されている畑の詳細情報を取得
 * @param id
 * @returns
 */

export const getDetailField = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT * From fields where id = ?`;
  const [rows, fields] = await conn.query(sql, [id]);
  return rows;
};

/**
 * ユーザーを登録
 * @param data
 * @returns
 */

export const insertUser = async (data: User) => {
  const conn = await mysql.createConnection(dbSetting);
  let sql = `SELECT * FROM users WHERE email = ? LIMIT 1`;
  const [rows, fields] = await conn.query(sql, [data.email]);
  let status: number;
  if (Object.keys(rows).length === 0) {
    const hashPass = bcrypt.hashSync(data.password, 10);
    sql = `INSERT INTO users(email,password,username) value(?,?,?)`;
    await conn.query(sql, [data.email, hashPass, data.username]);
    status = 200;
  } else {
    status = 500;
  }
  return status;
};

/**
 * ユーザーのパスワードを取得
 * @param email メールアドレス
 * @returns rows
 */

export const getHashPassword = async (email: string) => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = `SELECT password FROM users WHERE email = ? LIMIT 1`;
  const [rows, fields] = (await conn.query(sql, [email])) as any;
  if (Object.keys(rows).length === 0) {
    const status = 500;
    return status;
  } else {
    return rows[0].password;
  }
};

/**
 * ユーザーを取得
 * @param email
 * @param password
 * @param hashPass
 * @returns
 */

export const getUser = async (email: string, password: string, hashPass: string) => {
  const conn = await mysql.createConnection(dbSetting);
  if (bcrypt.compareSync(password, hashPass)) {
    const sql = `SELECT id,email,username,status FROM users where email = ?`;
    const [rows, fields] = await conn.query(sql, [email]);
    return rows;
  }
};

/**
 * ESP32のデータを取得
 * @param id
 * @param period 期間
 * @returns
 */

export const getGraphDatas = async (field_id?: string, period?: string) => {
  const conn = await mysql.createConnection(dbSetting);
  let sql = '';
  switch (period) {
    case 'all':
      sql = `SELECT moisture as 水分量,humidity as 湿度,temperature as 気温,air_pressure as 気圧,created_at From datas where field_id = ?`;
      break;
    case 'one':
      sql = `SELECT moisture as 水分量,humidity as 湿度,temperature as 気温,air_pressure as 気圧,created_at From datas where field_id = ? && updated_at >= (NOW() - INTERVAL 7 DAY)`;
      break;
    case 'two':
      sql = `SELECT moisture as 水分量,humidity as 湿度,temperature as 気温,air_pressure as 気圧,created_at From datas where field_id = ? && updated_at >= (NOW() - INTERVAL 14 DAY)`;
      break;
  }
  const [rows, fields] = await conn.query(sql, [field_id]);
  return rows;
};
