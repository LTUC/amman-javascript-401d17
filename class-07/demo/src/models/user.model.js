'use strict';

const {sequelize, DataTypes} = require('./index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const users = sequelize.define('users', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  token: {
    type: DataTypes.VIRTUAL
  }
});

users.basicChecker = async function(username, password) {
  const user = await users.findOne({where: {username}});

  const isValid = await bcrypt.compare(password, user.password);
  if(isValid) {
    const userToken = jwt.sign({username: user.username, password: user.password}, SECRET)
    return {
      user,
      token: userToken
    };
  } else {
    throw new Error('User doesnt exists');
  }
}

users.bearerChecker = async function(token) {
  const parsedToken = jwt.verify(token, SECRET);
  // console.log(parsedToken)
  const user = await users.findOne({where: {username: parsedToken.username}});
  if(user.username) {
    return user;
  } else {
    throw new Error('Invalid Token');
  }
}

module.exports = users;