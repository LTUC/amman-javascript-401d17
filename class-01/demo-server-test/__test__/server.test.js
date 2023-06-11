'use strict';

// describe('Testing Sum', () => {
//   it('adds 1 + 2 to equal 3', () => {
//     expect(1 + 2).toBe(3);
//   });

//   it('multiply 5 * 5 to equal 25', () => {
//     expect(5 * 5).toBe(25)
//   })
// })

const supertest = require('supertest');
const {app} = require('../server');
const req = supertest(app);

describe('Server test', () => {
  it('Handel not found pages', async () => {
    const res = await req.get('/items');
    expect(res.status).toEqual(404);
  });

  it('Handle the root path', async () => {
    const res = await req.get('/');
    // console.log(res.body.message)
    expect(res.status).toEqual(200);
    expect(res.body.message).toEqual('Welcome to Home page')
  })

  it('Handle errors', async () => {
    const res = await req.get('/bad');
    expect(res.status).toEqual(500);
    expect(res.body.route).toEqual('/bad');
  })
})