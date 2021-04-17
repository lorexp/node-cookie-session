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

app.listen(3000, () => console.log('Running at port 3000'));
