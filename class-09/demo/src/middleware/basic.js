'use strict';

const base64 = require('base-64');
const { users } = require('../models');
// const { userModel } = require('../models');

module.exports = async (req, res, next) => {

  console.log(req.headers.authorization)
  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization.split(' ').pop();

  console.log(basic)
  let [user, pass] = base64.decode(basic).split(':');

  console.log('this is the user collection: ', users)
  try {
    // req.user = await userModel.authenticateBasic(user, pass)
    req.user = await users.model.authenticateBasic(user, pass)
    next();
  } catch (e) {
    _authError()
  }

  function _authError() {
    res.status(403).send('Invalid Login');
  }

}
