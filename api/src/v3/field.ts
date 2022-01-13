import express from 'express';
import { Field } from 'types/type';
import { getField, getDetailField, createField } from './db';

const filedRouter = express.Router();

filedRouter.post('/create', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  const field: Field = req.body;
  try {
    createField(field).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 404 });
  }
  console.log(field);
});

filedRouter.get('/:user_id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getField(req.params.user_id).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

filedRouter.get('/detail/:id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getDetailField(req.params.id).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { filedRouter };
