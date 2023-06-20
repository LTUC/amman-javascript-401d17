'use strict';

const express = require("express");
const { People } = require('../models/index');

const router = express.Router();

router.get('/people', getPeople);
router.get('/people/:id', getOnePerson);
router.put('/people/:id', updatePerson);
router.delete('/people/:id', deletePerson);
router.post('/people', createPerson);


async function getPeople(req, res) {
  const allPeople = await People.findAll();
  res.status(200).json(allPeople);
}

async function getOnePerson(req, res) {
  const id = req.params.id;
  const person = await People.findOne({ where: { id: id } });
  res.status(200).json(person)
}

async function updatePerson(req, res) {
  const id = req.params.id;
  const obj = req.body;
  // const person = await People.findOne({where: { id }});
  // const updatedPerson = await person.update(obj)

  const updatedPerson = await People.update(obj, { where: { id } })

  res.status(202).json(updatedPerson);

}

async function deletePerson(req, res) {
  const id = req.params.id;
  const deletedPerson = await People.destroy({ where: { id } });
  res.status(204).json(deletedPerson);
}

async function createPerson(req, res) {
  const obj = req.body;
  const person = await People.create(obj);
  res.status(201).json(person)
}

module.exports = router;