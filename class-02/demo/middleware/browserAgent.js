'use strict';

module.exports = (req, res, next) => {
  req.browser = req.headers['user-agent'];
  next();
}