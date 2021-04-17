import express from 'express';
import cookieSession from 'cookie-session';

const app = express();

const day = 24 * 60 * 60 * 1000;

app.use(
  cookieSession({
    name: 'session',
    keys: ['test'],
    maxAge: day,
  })
);

app.get('/:name', async (req, res) => {
  const { name } = req.params;
  req.session.name = name;
  return res.send('Hello World');
});

app.get('/check/name', async (req, res) => {
  return res.send(req.session.name);
});

app.listen(3000, () => console.log('Running at port 3000'));
