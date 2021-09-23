import express from 'express';
import { getThreshold, editThreshold, insertThreshold } from './db';

const thresholdRouter = express.Router();

//UPDATE method route
thresholdRouter.post('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const threshold: { fieldId: string; moisture: string } = req.body;
    editThreshold(threshold.fieldId, threshold.moisture).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

//UPDATE method route
thresholdRouter.post('/add/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const threshold: { fieldId: string } = req.body;
    insertThreshold(threshold.fieldId).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

thresholdRouter.get('/:fieldId', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getThreshold(req.params.fieldId).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { thresholdRouter };
