'use strict';

module.exports = (capability) => {
  console.log(capability)
  return (req, res, next) => {
    console.log(req.user.capabilities)
    if(req.user.capabilities.includes(capability)) next();
    else next('You don\'t have the right Capabilities to access this page!!!')
  }
}