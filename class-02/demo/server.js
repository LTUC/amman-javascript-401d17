'use strict';

// Server js

const express = require('express');
const  app = express();

const cors = require('cors');
app.use(cors());


const stamper = require('./middleware/stamper');
const pageNotFound = require('./middleware/404');
const serverError = require('./middleware/500');
const square = require('./middleware/square');
const browserAgent = require('./middleware/browserAgent');
const logger = require('./middleware/logger');

app.use(logger)

app.get('/', stamper, isAuth, browserAgent, handleHome);
app.get('/bad', badRequest);
app.get('/number/:num', square, squareHandler)


app.use('*', pageNotFound);
app.use(serverError);

function handleHome(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to Home page',
    time: req.stamper,
    agent: req.browser
  })
}

function badRequest(req, res, next) {
  req.body = {
    test: 'test'
  }
  // if(!number) {
    next({message: 'Not a Number'})

  // }
}

function squareHandler(req, res) {
  let number = req.params.num;
  res.status(200).json({
    code: 200,
    message: `The square of ${number} is ${req.square}`
  })
}

function isAuth(req, res, next) {
  console.log('user authinticated');
  next();
}


function start(port) {
  app.listen(port, () => console.log('Up and running on port: ', port))
}

module.exports = {
  app,
  start
}