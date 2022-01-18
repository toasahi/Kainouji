import express from 'express';
import { insertUser2 } from './db';

const userRouter = express.Router();

userRouter.post('/', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  const data = req.body;
  try {
    insertUser2(data.id, data.username)
      .then(() => {
        res.status(200).json({ message: 'OK', status: 200 });
      })
      .catch((error) => res.status(500).json({ message: `${error}`, status: 500 }));
  } catch (error) {
    res.status(500).json({ message: error.message, status: 500 });
  }
});

export { userRouter };
