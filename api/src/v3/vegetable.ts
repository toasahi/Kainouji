import express from 'express';
import { getDetailVegetable, getVegetables } from './db';

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

vegetableRouter.get('/:id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getDetailVegetable(req.params.id).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { vegetableRouter };
