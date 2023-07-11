'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}`;

const io = require('socket.io-client');
const socket = io.connect(host);

socket.on('brightness', payload => {
  console.log(payload)
  if(payload.brightness >= 90) console.log('Move the Arms!');
})