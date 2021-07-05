import express from 'express';
import mysql from 'mysql2/promise';
import logger from 'morgan';

import { Setting } from './setting';

const app: express.Express = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

async function getMoisture() {
  const conn = await mysql.createConnection(dbSetting);
  const sql = 'select * from soil_moistures';
  const [rows, fields] = await conn.query(sql);
  return rows;
}

app.listen(4000, () => console.log('Express Server Now Running On localhost:4000'));

app.get('/', (req: express.Request, res: express.Response) => {
  getData().then((result) => {
    res.json(result);
  });
});

app.get('/moisture', (req: express.Request, res: express.Response) => {
  getMoisture().then((result) => {
    res.json(result);
  });
});
