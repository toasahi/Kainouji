import express from 'express';
import { insertUser, getUser } from './db';

const userRouter = express.Router();

userRouter.get('/:id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  getUser(req.params.id).then(() => {});
});

userRouter.post('/create', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  const user: { id: string; username: string } = req.body;
  insertUser(user.id, user.username).then(() => {
    res.status(200).json({ message: 'OK', status: 200 });
  });
});

export { userRouter };
