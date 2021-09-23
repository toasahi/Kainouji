import express from 'express';
import { getGraphDatas } from './db';
const graphRouter = express.Router();

graphRouter.get('/:fieldId/period/:period', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getGraphDatas(req.params.fieldId, req.params.period).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export { graphRouter };
