'use strict';

require('dotenv').config();
const port = process.env.PORT || 3000;
const host = `http://localhost:${port}`;

const io = require('socket.io-client');
const socket = io.connect(host);

socket.emit('light');