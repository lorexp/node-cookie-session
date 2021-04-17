import { Router } from 'express';

const router = Router();
router.get('/:name', async (req, res) => {
  const { name } = req.params;
  req.session.name = name;
  return res.send(`Hello ${name}`);
});

router.get('/check/name', async (req, res) => res.send(req.session.name));

export default router;
