'use strict';

const Events = require('events');

const eventsPool = new Events();

// on
// emit

eventsPool.on('greeting', greetingHandler);
eventsPool.on('greeting', handler2);

function greetingHandler(payload) {
  console.log(`Hello ${payload.name}, I'm ${payload.age}, my nationality is ${payload.nationality}`);
  // payload.handler2(payload);
  // handler2(payload);
}

function handler2(payload) {
  console.log('test two handlers');
}

// eventsPool.emit('greeting', 'Mohammed')
eventsPool.emit('greeting', { name: 'Alaa', age: 24, nationality: 'Jordinian', handler2 });


let counter = 0;
// eventsPool.on('counter', counterHandler);
eventsPool.once('counter', counterHandler);

function counterHandler(payload) {
  // for (let i = 0; i < 1000000000000; i++) {
    counter = counter + 1;
  // }
}

eventsPool.emit('counter');
eventsPool.emit('counter');
eventsPool.emit('counter');
eventsPool.emit('counter');

console.log('Counter:', counter)

console.log('after Counter')

