'use strict';

require('dotenv').config();
const { app } = require('../src/server');
const supertest = require('supertest');
const mockServer = supertest(app);

const { db } = require('../src/models/index');

beforeAll(async () => {
  // Open the connection before the test case start testing
  await db.sync();
})

afterAll(async () => {
  // Close the connection after the test case finsh testing
  await db.drop();
})

describe('Server test', () => {
  it('can add new person', async () => {
    const res = await mockServer.post('/people').send({
      firstName: 'Mohammed',
      lastName: 'Khalil'
    });
    const createdPerson = JSON.parse(res.text);
    // console.log(JSON.parse(res.text))
    expect(res.status).toBe(201);
    expect(createdPerson.firstName).toEqual('Mohammed')
  });
  
  it('Can read all people', async () => {
    const res = await mockServer.get('/people');
    expect(res.status).toBe(200);
  })

  it('Update read all people', async () => {
    const res = await mockServer.put('/people/1');
    expect(res.status).toBe(202);
  })

  it('Delete read all people', async () => {
    const res = await mockServer.delete('/people/1');
    expect(res.status).toBe(204);
  })
})