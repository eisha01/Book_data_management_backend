import express from 'express';

import { config } from 'dotenv';

import connect from './connection.js';

import data from './routes/data.js';

import bookdata from './routes/bookdata.js';

const app = express();

config();

const Port = process.env.PORT || 8000;

try {
  app.use('/book', data);

  app.use('/books', bookdata);

  connect();

  app.listen(Port, () => {
    console.log(`connected to port ${Port}`);
  });
} catch (e) {
  console.log(e.message);
}
