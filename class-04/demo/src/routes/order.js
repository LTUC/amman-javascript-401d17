'use strict';

const express = require('express');
const { orderCollection } = require('../models');
const router = express.Router();

router.get('/order', getOrder);
router.get('/order/:id', getOneOrder);
router.put('/order/:id', updateOrder);
router.delete('/order/:id', deleteOrder);
router.post('/order', createOrder);


async function getOrder(req, res) {
  const allOrder = await orderCollection.read();
  res.status(200).json(allOrder);
}

async function getOneOrder(req, res) {
  const id = req.params.id;
  const order = await orderCollection.read(id);
  res.status(200).json(order)
}

async function updateOrder(req, res) {
  const id = req.params.id;
  const obj = req.body;
  // const person = await People.findOne({where: { id }});
  // const updatedPerson = await person.update(obj)

  const updatedOrder = await orderCollection.update(id, obj)

  res.status(202).json(updatedOrder);

}

async function deleteOrder(req, res) {
  const id = req.params.id;
  const deletedOrder = await orderCollection.delete(id);
  res.status(204).json(deletedOrder);
}

async function createOrder(req, res) {
  const obj = req.body;
  const order = await orderCollection.create(obj);
  res.status(201).json(order)
}

module.exports = router;