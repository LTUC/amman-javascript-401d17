'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;

const io = require('socket.io')(port);

// this one will do the cennection over /
io.on('connection', socket => {
  console.log('Your connected to the Server, you id:', socket.id);

  socket.on('light', () => {
    setInterval(() => {
      const brightness = Math.ceil(Math.random() * 100);
      console.log('--------------------');
      console.log('Brightness detected:', brightness);
      io.emit('brightness', {brightness: brightness});
    }, 3000)
  })
})


// this one will do the cennection over /health-system

const heathNameSpace = io.of('/health-system');
heathNameSpace.on('connection', socket => {
  console.log('Connected to the Heath system,', socket.id);

  socket.emit('flu', 40)
})