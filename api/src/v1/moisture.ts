import express from 'express';
import { getFieldMoisture, getMoisture } from './db';

const moistureRouter = express.Router();

moistureRouter.get('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getMoisture().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

moistureRouter.get('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  console.log(req.query.id);
  try {
    getFieldMoisture().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { moistureRouter };
