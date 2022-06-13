import express from 'express';
import { prismaChat } from '@/infra/chat';
import { prisma } from '@/infra';

const router = express.Router();

/* GET chat */
router.get('/', async (req, res, _next) => {
  try {
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

/* POST create chat */
router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    await prismaChat.create(data);
    const resData = await prismaChat.read();
    res.status(200).json(resData).send;
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;
