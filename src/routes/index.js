import { Router } from 'express';

const router = Router();
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  req.session.name = name;
  return res.send(`Hello ${name}`);
});

router.get('/session/name', async (req, res) =>
  res.send(req.session.name || 'No name in session'),
);

router.get('/session/destroy', async (req, res) => {
  req.session = null;
  return res.sendStatus(200);
});

export default router;
