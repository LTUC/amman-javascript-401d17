'use strict';

const eventsPool = require('../eventPool');

eventsPool.on('light', movingArm);


function movingArm(payload) {
  if(payload.brightness >= 80) console.log(`The brightness is ${payload.brightness}, moving the arms to cover the eye!`);
}