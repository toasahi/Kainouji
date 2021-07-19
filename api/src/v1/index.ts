import express from 'express';
import { moistureRouter } from './moisture';
import { thresholdRouter } from './threshold';
import { vegetableRouter } from './vegetable';

const router = express.Router();

//v1以下のルーティング
router.use('/moisture', moistureRouter);
router.use('/threshold', thresholdRouter);
router.use('/vegetable', vegetableRouter);

export { router };
