'use strict';

const eventsPool = require('../eventPool');

eventsPool.on('light', closingEyes);

function closingEyes(payload) {
  // console.log(payload)
  if(payload.brightness >= 70) console.log('Closing the Eyes ...');
}


setInterval(() => {
  const brightness = Math.ceil(Math.random() * 100);
  console.log('---------------------------')
  console.log('Brightness detected:', brightness);
  eventsPool.emit('brightness-detected', brightness);
}, 3000)