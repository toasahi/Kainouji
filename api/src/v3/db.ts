import mysql from 'mysql2/promise';
import { Field, Setting } from 'types/type';

const dbSetting: Setting = {
  host: process.env.MYSQL_HOST!,
  user: process.env.MYSQL_USER!,
  password: process.env.MYSQL_PASSWORD!,
  database: process.env.MYSQL_HOST_DATABASE!,
  dateStrings: true,
};

/**
 * ユーザーを追加する
 * @param id
 * @param username
 */

export const insertUser = async (id: string, username: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `INSERT INTO users(id,username) VALUES(?,?)`;
    const [rows] = await conn.query(sql, [id, username]);
    return rows;
  } finally {
    await conn.end();
  }
};

export const getUser = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `SELECT username FROM users WHERE id = ?`;
    const [rows] = await conn.query(sql, [id]);
    return rows;
  } finally {
    await conn.end();
  }
};

/**
 * 快農児の閾値の更新
 * @param moisture
 * @param id
 */
export const editThreshold = async (id: number, moisture: number) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `UPDATE chips SET moisture = ? WHERE id = ?`;
    const [rows] = await conn.query(sql, [moisture, id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 閾値の取得
 * @async
 * @returns rows
 * @param id チップid
 */

export const getThreshold = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `SELECT * From chips WHERE id = ?`;
    const [rows] = await conn.query(sql, [id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 登録されている野菜を取得
 */
export const getVegetables = async () => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = 'SELECT id,vegetable From vegetables';
    const [rows] = await conn.query(sql);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 野菜の詳細データを取得
 * @param id
 */

export const getDetailVegetable = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = 'SELECT * From vegetables Where id = ?';
    const [rows] = await conn.query(sql, [id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 畑の追加処理
 * @async
 * @returns rows
 */

export const createField = async (data: Field) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    let sql: string;
    sql = `INSERT IGNORE INTO chips(id) values(?)`;
    await conn.query(sql, [data.chip_id]);
    if (data.image_name !== '') {
      sql = `INSERT INTO fields(user_id,field_name,vegetable_id,chip_id,setting_date,image_name) values(?,?,?,?,?,?)`;
    } else {
      sql = `INSERT INTO fields(user_id,field_name,vegetable_id,chip_id,setting_date) values(?,?,?,?,?)`;
    }

    const [rows] = await conn.query(sql, [
      data.user_id,
      data.field_name,
      data.vegetable_id,
      data.chip_id,
      data.setting_date,
      data.image_name,
    ]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 登録されている畑を取得
 * @returns
 * @param user_id
 */

export const getField = async (user_id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `SELECT * From fields where user_id = ?`;
    const [rows] = await conn.query(sql, [user_id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * 登録されている畑の詳細情報を取得
 * @param id
 * @returns
 */

export const getDetailField = async (id: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
    const sql = `SELECT F.id, F.field_name, V.vegetable,F.setting_date,F.chip_id,C.moisture FROM 
                    fields AS F JOIN chips AS C ON F.chip_id = C.id JOIN vegetables AS V ON F.vegetable_id = V.id WHERE F.id= ?;`;
    const [rows] = await conn.query(sql, [id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};

/**
 * ESP32のデータを取得
 * @param field_id
 * @param period 期間
 * @returns
 */

export const getGraphData = async (field_id?: string, period?: string) => {
  const conn = await mysql.createConnection(dbSetting);
  try {
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
    const [rows] = await conn.query(sql, [field_id]);
    return rows;
  } catch (e) {
    console.log(e);
  } finally {
    await conn.end();
  }
};
