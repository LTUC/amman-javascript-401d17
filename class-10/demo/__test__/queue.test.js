'use strict';

const Queue = require('../queue/queue');

describe('Queue testing', () => {
  it('implementing Stack with FIFO', () => {
    const q = new Queue();
    q.enqueue(1);
    q.enqueue(2);
    q.enqueue(3);
    q.enqueue(4);
    q.enqueue(5);

    expect(q.dequeue()).toEqual(1);
    expect(q.dequeue()).toEqual(2);
    expect(q.dequeue()).toEqual(3);
    expect(q.dequeue()).toEqual(4);
  })
})