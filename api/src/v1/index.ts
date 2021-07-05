import express from 'express';
import { moistureRouter } from './moisture';

const router = express.Router();

//v1以下のルーティング
router.use('/moisture', moistureRouter);

export { router };
