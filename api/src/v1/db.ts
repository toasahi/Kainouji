import mysql from 'mysql2/promise';
import { Setting } from '../setting';

type Setting = {
  host: string;
  user: string;
  password: string;
  database: string;
};

const dbSetting: Setting = {
  host: Setting.MYSQL_HOST,
  user: Setting.MYSQL_USER,
  password: Setting.MYSQL_PASSWORD,
  database: Setting.MYSQL_HOST_DATABASE,
};

export const getMoisture = async () => {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'select * from soil_moistures';
  const [rows, fields] = await conn.query(sql);
  return rows;
};
