import express from 'express';
import { getVegetables } from './db';

const vegetableRouter = express.Router();

vegetableRouter.get('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getVegetables().then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { vegetableRouter };
