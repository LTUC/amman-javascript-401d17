'use strict';

module.exports = (req, res, next) => {
  let number = +req.params.num;
  // console.log(typeof number, ' ', number)
  if(isNaN(number)) next({message: 'Not a Number'});
  req.square = number * number
  next()
}