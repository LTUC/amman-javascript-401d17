'use strict';

const io = require('socket.io-client');
const host = 'http://localhost:3000/family';
const socket = io.connect(host);

// socket.emit('new_task', 'Do your homewrok!')
// socket.emit('new_task', 'Clean your room!')
// socket.emit('new_task', 'Eat your food!')

// console.log(process.argv.splice(2))

const terminalTasks = process.argv.splice(2);
terminalTasks.forEach(item => {
  socket.emit('new_task', item)
})

socket.on('added', payload => {
  console.log(`The task been added to the list: ${payload}`)
})