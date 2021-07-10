import express from 'express';
import { moistureRouter } from './moisture';
import { thresholdRouter } from './threshold';

const router = express.Router();

//v1以下のルーティング
router.use('/moisture', moistureRouter);
router.use('/threshold', thresholdRouter);

export { router };
