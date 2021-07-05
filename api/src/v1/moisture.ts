import express from 'express';
import { getMoisture } from './db';

const moistureRouter = express.Router();

moistureRouter.get('/', (req: express.Request, res: express.Response) => {
  try {
    getMoisture().then((result) => {
      res.json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { moistureRouter };
