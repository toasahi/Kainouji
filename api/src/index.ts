import express from 'express';
import logger from 'morgan';
import { router } from './v1/index';

const app: express.Express = express();
app.use(logger('dev'));
//配信側のjsonオブジェクトの受信設定
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//ルーティング
app.use('/v1', router);

//サーバー起動
app.listen(4000, () => console.log('Express Server Now Running On localhost:4000'));
