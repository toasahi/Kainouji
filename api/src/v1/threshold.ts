import express from 'express';
import { Threshold, getThreshold, editThreshold } from './db';

const thresholdRouter = express.Router();

//UPDATE method route
thresholdRouter.post('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const threshold: Threshold = req.body;
    editThreshold(threshold).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

thresholdRouter.get('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getThreshold().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { thresholdRouter };
