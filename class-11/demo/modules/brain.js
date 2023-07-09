'use strict';

const eventsPool = require('./eventPool');
require('./arm/arms');
require('./eye/eyes');


eventsPool.on('brightness-detected', (payload) => {
  eventsPool.emit('light', {brightness: payload})
})