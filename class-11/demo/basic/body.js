'use strict';

const Events = require('events');

const eventsPool = new Events();

eventsPool.on('light', movingArm);
eventsPool.on('light', closingEyes);

function closingEyes() {
  console.log('Closing the Eyes ...')
}

function movingArm(payload) {
  console.log(`The brightness is ${payload}, moving the arms to cover the eye!`)
}

eventsPool.emit('light', {brightness: 75})