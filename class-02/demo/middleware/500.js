'use strict';

module.exports = (error, req, res, next) => {
  console.log(error)
  res.status(500).json({
    code: 500,
    route: req.originalUrl,
    query: req.query,
    body: req.body,
    mesasge: `SERVER ERROR: ${error.message}`
  })
}