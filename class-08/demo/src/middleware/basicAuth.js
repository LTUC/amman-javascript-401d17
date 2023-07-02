'use strict';

const base64 = require('base-64');
const Users = require('../models/user.model');

module.exports = async (req, res, next) => {
  if(req.headers.authorization) {
    const credinail = req.headers.authorization.split(' ').pop(); // Basic alksndlaksndlaksd
    const decodedValues = base64.decode(credinail); // username:password
    const [username, password] = decodedValues.split(':');
    Users.basicChecker(username, password).then(data => {
      console.log(data);
      req.user = data;
      next()
    }).catch(err => {
      next(err)
    })
  } else {
    next('Error!')
  }
}