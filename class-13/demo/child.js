'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/family';
const socket = io.connect(host);

socket.emit('getListedTasks')

socket.on('task', payload => {
  console.log('task received', payload)

  socket.emit('finished_task', payload)
})