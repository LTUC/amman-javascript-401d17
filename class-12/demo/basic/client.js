'use strict';

const port = process.env.PORT || 3000;

const io = require('socket.io-client');
const host = `http://localhost:${port}`;
const socket = io.connect(host);

socket.emit('hello', { username: 'Saleh' });

socket.on('hi', payload => {
  console.log('The server said:', payload);
})

setTimeout(() => {
  socket.emit('goodbye')  
}, 5000)

socket.on('bye', byeHandler)

function byeHandler(payload) {
  console.log('Bye');
  socket.disconnect();
}