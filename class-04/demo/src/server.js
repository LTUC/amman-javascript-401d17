'use strict';

const express = require('express');
const cors = require('cors');

const peopleRouter = require('./routes/people');
const customerRouter = require('./routes/customer');
const orderRouter = require('./routes/order');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to home page!'
  })
})

app.use(peopleRouter);
app.use(customerRouter);
app.use(orderRouter);

function start(port) {
  app.listen(port, () => console.log(`Up an running on port: ${port}`));
}

module.exports = {
  start,
  app
}