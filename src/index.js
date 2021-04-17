import express from 'express';
import cookieSession from 'cookie-session';
import dotenv from 'dotenv';
import helmet from 'helmet';
import router from './routes/index';

dotenv.config();

const { KEYS, PORT } = process.env;
const app = express();

app.use(helmet());

const day = 24 * 60 * 60 * 1000;

app.use(
  cookieSession({
    name: 'session',
    keys: [KEYS],
    maxAge: day,
  }),
);

app.use('/api', router);

app.listen(PORT, () => console.log(`Running at port: ${PORT}`));
