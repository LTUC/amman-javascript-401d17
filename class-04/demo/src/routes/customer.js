'use strict';

const express = require('express');
const { Customer, orderCollection } = require('../models');
const router = express.Router();
const { customerCollection } = require('../models/index')

router.get('/customer', getCustomer);
router.get('/customer/:id', getOneCustomer);
router.put('/customer/:id', updateCustomer);
router.delete('/customer/:id', deleteCustomer);
router.post('/customer', createCustomer);
router.get('/customerorders/:id', customerOrders);


async function getCustomer(req, res) {
  // const allCustomer = await Customer.findAll();
  const allCustomer = await customerCollection.read();
  res.status(200).json(allCustomer);
}

async function getOneCustomer(req, res) {
  const id = req.params.id;
  // const customer = await Customer.findOne({ where: { id: id } });
  const customer = await customerCollection.read(id);

  res.status(200).json(customer)
}

async function updateCustomer(req, res) {
  const id = req.params.id;
  const obj = req.body;
  // const person = await People.findOne({where: { id }});
  // const updatedPerson = await person.update(obj)

  const updatedCustomer = await customerCollection.update(id, obj)

  res.status(202).json(updatedCustomer);

}

async function deleteCustomer(req, res) {
  const id = req.params.id;
  const deletedCustomer = await customerCollection.delete(id);
  res.status(204).json(deletedCustomer);
}

async function createCustomer(req, res) {
  const obj = req.body;
  // const customer = await Customer.create(obj);
  const customer = await customerCollection.create(obj)
  res.status(201).json(customer)
}

async function customerOrders(req, res) {
  const id = req.params.id;
  const customerOrdersById = await customerCollection.readCustomerOrders(id, orderCollection.model);
  res.status(200).json(customerOrdersById)
}


module.exports = router;