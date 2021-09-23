import express from 'express';
import { filedRouter } from './field';
import { graphRouter } from './graph';
import { thresholdRouter } from './threshold';
import { userRouter } from './user';
import { vegetableRouter } from './vegetable';

const router = express.Router();

//v1以下のルーティング
router.use('/threshold', thresholdRouter);
router.use('/vegetable', vegetableRouter);
router.use('/field', filedRouter);
router.use('/user', userRouter);
router.use('/graph', graphRouter);

export { router };
