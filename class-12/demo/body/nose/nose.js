'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}/health-system`;

const io = require('socket.io-client');
const socket = io.connect(host);

socket.on('flu', payload => {
  console.log('Running the nose,', payload);
})