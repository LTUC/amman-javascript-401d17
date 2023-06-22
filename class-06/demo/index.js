'use strict';

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const { Sequelize, DataType, DataTypes } = require('sequelize');
const POSTGRES_URL = process.env.DATABASE_URL;
const bcrypt = require('bcrypt');
const base64 = require('base-64');

const sequelize = new Sequelize(POSTGRES_URL, {});

const app = express();
app.use(cors());
app.use(express.json());

const User = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
});


app.get('/', (req, res) => {
  res.json({ message: 'Hello from the other World!' })
})

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 5);
  // console.log(username, hashedPassword)
  const record = await User.create({
    username: username,
    password: hashedPassword
  })
  res.status(201).json(record)
});

app.post('/signin', async (req, res) => {
  // req.headers
  console.log(req.body)
  console.log(req.headers.authorization);
  if (req.headers.authorization) {
    const authData = req.headers.authorization.split(' ');
    // console.log(authData[1])
    // const encodedData = authData[1];
    const encodedData = authData.pop();
    const decodedData = base64.decode(encodedData)
    // console.log(decodedData)

    const [username, password] = decodedData.split(':');
    const user = await User.findOne({ where: { username } });
    // console.log(user)
    const isValid = await bcrypt.compare(password, user.password)

    // console.log(isValid)
    if(isValid) {
      res.status(200).json(user)
    } else {
      res.status(500).json({
        message: 'This user is not Authorized!!!'
      })
    }

  } else {
    console.log('Please enter username and the password!!!!')
  }
})

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Running on Port: 3000'))
})