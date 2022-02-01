import express from 'express';
import { fieldRouter } from './field';
import { graphRouter } from './graph';
import { vegetableRouter } from './vegetable';
import { chipRouter } from './chip';
import { userRouter } from './user';

const router = express.Router();

//v1以下のルーティング
router.use('/chip', chipRouter);
router.use('/vegetable', vegetableRouter);
router.use('/field', fieldRouter);
router.use('/user', userRouter);
router.use('/graph', graphRouter);

export { router };
