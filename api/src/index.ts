import express from 'express';
import logger from 'morgan';
import path from 'path';
import cors from 'cors';
import { router } from './v3';

const app: express.Express = express();
app.use(logger('dev'));
//配信側のjsonオブジェクトの受信設定(bodyParse)
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//ルーティング
app.use('/v3', router);

app.use(express.static(path.join(__dirname, 'dist')));

app.use(cors());

//サーバー起動
app.listen(process.env.SERVER_PORT, () => console.log('Express Server Now Running'));
