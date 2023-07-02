'use strict';

require('dotenv').config();
const PORT = process.env.PORT;
const { sequelize } = require('./src/models');

const { start } = require('./src/server');
sequelize.sync({ force: true }).then(() => {
  start(PORT);
})