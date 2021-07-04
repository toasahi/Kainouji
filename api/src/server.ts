import express from 'express';
import mysql from 'mysql2/promise';
import { Setting } from './setting';

const app: express.Express = express();

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

async function getData() {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'select * from soil_moistures';
  const [rows, fields] = await conn.query(sql);
  return rows;
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4000, () => console.log('Express Server Now Running On localhost:4000'));

app.get('/', (req: express.Request, res: express.Response) => {
  getData().then((result) => {
    res.json(result);
  });
});
