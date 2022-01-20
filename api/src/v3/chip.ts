import express from 'express';
import { getThreshold, insertChipId, editThreshold } from './db';

const chipRouter = express.Router();

chipRouter.get('/:chip_id', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    getThreshold(req.params.chip_id).then((result) => {
      res.status(200).json(result);
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//UPDATE method route
chipRouter.post('/update', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const chip: { chip_id: number; moisture: number } = req.body;
    console.log(chip);
    editThreshold(chip.chip_id, chip.moisture).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

//チップidの追加ルート
chipRouter.post('/create', (req: express.Request, res: express.Response) => {
  res.set({ 'Access-Control-Allow-Origin': '*' });
  try {
    const chip_id: { id: string } = req.body;
    insertChipId(chip_id).then(() => {
      res.status(200).json({ message: 'OK', status: 200 });
    });
  } catch (error) {
    res.status(400).json({ message: error.message, status: 400 });
  }
});

export { chipRouter };
