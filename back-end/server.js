const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
const port = process.env.PORT || 3000;

const wishletRouter = require('./controllers/wishlets');
const authRouter = require('./controllers/auth');
const userRouter = require('./controllers/users');

mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

app.use(express.json());
app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:5173' }));

app.use('/wishlets', wishletRouter);
app.use('/auth', authRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
