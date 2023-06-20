// Postgress conection url, the options, defining the schema the will be exported
'use strict';

const { Sequelize, DataTypes } = require("sequelize");
const Collection = require('./lib/collection');

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
const customer = require('./custome.model');
const order = require('./order.model');

const customerModel = customer(sequelize, DataTypes);
const orderModel = order(sequelize, DataTypes);

// sourceKey -> PK
customerModel.hasMany(orderModel, {foreignKey: 'customerId', sourceKey: 'id'});

// targetKey -> the target model PK
orderModel.belongsTo(customerModel, {foreignKey: 'customerId', targetKey: 'id'})

const customerCollection = new Collection(customerModel);
const orderCollection = new Collection(orderModel);

module.exports = {
  db: sequelize,
  People: people(sequelize, DataTypes),
  Customer: customer(sequelize, DataTypes),
  Order: order(sequelize, DataTypes),
  customerCollection,
  orderCollection
}