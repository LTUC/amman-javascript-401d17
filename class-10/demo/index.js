'use strict';

const Stack = require('./stack/stack');
const Queue = require('./queue/queue');

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);

// console.log(stack);

// console.log('The top element is: ',stack.peek());

// stack.pop();

// console.log(stack);
// console.log('The top element is: ',stack.peek());

// Queue -----------
const q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

console.log(q)

q.dequeue();
console.log(q)