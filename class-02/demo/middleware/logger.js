'use strict';

module.exports = (req, res, next) => {
  console.log(`REQUEST: ${req.method} ${req.path} ${new Date().toLocaleDateString()}`);
  next()
}