'use strict';

const express = require('express');
const cors = require('cors');
const people = require('./models/people.model');

const peopleRouter = require('./routes/people');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  console.log(people)
  res.status(200).json({
    message: 'Welcome to home page!'
  })
})

app.use(peopleRouter);

function start(port) {
  app.listen(port, () => console.log(`Up an running on port: ${port}`));
}

module.exports = {
  start,
  app
}