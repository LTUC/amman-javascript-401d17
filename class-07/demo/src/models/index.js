'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const POSTGRS_URL = process.env.DATABASE_URL;

const sequelize = new Sequelize(POSTGRS_URL, {});

module.exports = { sequelize, DataTypes };