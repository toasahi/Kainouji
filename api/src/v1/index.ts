import express from 'express';
import { filedRouter } from './field';
import { moistureRouter } from './moisture';
import { temperatureRouter } from './temperature';
import { thresholdRouter } from './threshold';
import { vegetableRouter } from './vegetable';

const router = express.Router();

//v1以下のルーティング
router.use('/moisture', moistureRouter);
router.use('/threshold', thresholdRouter);
router.use('/vegetable', vegetableRouter);
router.use('/field', filedRouter);
router.use('/temperature',temperatureRouter);

export { router };
