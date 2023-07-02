'use strict';

const Users = require('../models/user.model');

module.exports = (req, res ,next) => {
  if(req.headers.authorization) {
    // console.log(req.headers.authorization)
    const token = req.headers.authorization.split(' ').pop();
    Users.bearerChecker(token).then(data => {
      req.user = data;
      next();
    }).catch(err => next(err))
  } else {
    next('Access denied!!!')
  }
}