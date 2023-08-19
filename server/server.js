import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './db/db.js';
import userRouter from './routes/userRoutes.js';
import errorController from './controllers/errorController.js';

dotenv.config({ path: './config.env' });
const port = process.env.PORT || 3000;
connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/api/v1/users', userRouter);

app.use(errorController);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
