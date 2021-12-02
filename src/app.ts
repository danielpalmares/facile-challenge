import { config } from 'dotenv';
import { router } from './routes';
import express from 'express';
import cors from 'cors';

config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(process.env.PORT || 3000);
