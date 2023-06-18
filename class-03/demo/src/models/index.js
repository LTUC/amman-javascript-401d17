// Postgress conection url, the options, defining the schema the will be exported
'use strict';

const { Sequelize, DataTypes } = require("sequelize");

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI;

let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
} : {}

let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions);

const people = require('./people.model');

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes)
}