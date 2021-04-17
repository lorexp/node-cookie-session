import express from 'express';

const router = express.Router();

router.get('/:name', async (req, res) => {
  const { name } = req.params;
  req.session.name = name;
  return res.send('Hello World');
});

router.get('/check/name', async (req, res) => {
  return res.send(req.session.name);
});

export default router;
