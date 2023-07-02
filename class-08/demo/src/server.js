'use strict';

const express = require('express');
const app = express();
const cors = require('cors');

const bcrypt = require('bcrypt');
const users = require('./models/user.model');

const basicAuth = require('./middleware/basicAuth');
const bearerAuth = require('./middleware/bearerAuth');
const acl = require('./middleware/acl');

app.use(express.json());
app.use(cors());

app.get('/', homeHnadle);
app.post('/signup', signup);
app.post('/login', basicAuth, handleLogin);
app.get('/orders', bearerAuth, getOrders)

app.get('/article', bearerAuth, acl('read'), (req, res) => {
  res.status(200).json({
    message: 'Horray!!!'
  })  
})

app.post('/article', bearerAuth, acl('create'), (req, res) => {
  res.status(200).json({
    message: 'Created!!!'
  })  
})

app.put('/article', bearerAuth, acl('update'), (req, res) => {
  res.status(200).json({
    message: 'Updated!!!'
  })  
})

app.delete('/article', bearerAuth, acl('delete'), (req, res) => {
  res.status(200).json({
    message: 'Deleted!!!'
  })  
})

async function signup(req, res) {
  const { username, password, role } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = await users.create({
    username,
    password,
    role
  });
  res.status(201).json(newUser);
}

function handleLogin(req, res) {
  res.status(200).json(req.user)
}

function homeHnadle(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to home page!'
  })
}

function getOrders(req, res) {
  res.status(200).json({
    orderNumber: 1,
    title: 'apple'
  })
}

function start(port) {
  app.listen(port, () => console.log('Running on port', port))
}

module.exports = {
  app,
  start
}