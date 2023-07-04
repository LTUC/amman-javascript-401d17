'use strict';

const { server } = require('../src/server');
// Server containe the app from the server.js

const { db, users } = require('../src/models');
const jwt = require('jsonwebtoken');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll(async connected => {
  await db.sync();
  await users.create({username: 'anas', password: '123123', role: 'admin'});
  connected();
});

afterAll(async done => {
  await db.drop();
  done();
})

describe('V2 test', () => {
  const token = jwt.sign({username: 'anas'}, process.env.SECRET || 'amman401d17');

  it('Responding with 404 for not found page', () => {
    return mockRequest.get('/test').then(result => {
      expect(result.status).toBe(404);
    })
  })

  it('Can create a record', async () => {
    const data = {
      name: 'apple',
      calories: 300,
      type: 'fruit'
    }

    console.log(`Bearer ${token}`)

    const response = await mockRequest.post('/api/v2/food')
    .set({authorization: `Bearer ${token}`})
    .send(data);

    expect(response.status).toBe(201);
    expect(response.body.id).toBeDefined();
  });

  it('can get list of records', async () => {
    const response = await mockRequest.get('/api/v2/food')
    .set({authorization: `Bearer ${token}`});

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
    expect(response.body.length).toEqual(1)
  })
})