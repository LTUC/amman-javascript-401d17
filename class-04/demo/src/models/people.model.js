// Containing the schema for the People table

'use strict';
const people = (sequelize, DataTypes) => sequelize.define('People', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
})

module.exports = people;