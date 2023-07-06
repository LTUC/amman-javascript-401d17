'use strict';

const Node = require('../lib/node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {

      // let n = this.front;
      // while(n.next) {
      //   n = n.next;
      // }
      // n.next = newNode

      this.rear.next = newNode;
      this.rear = newNode;
    }
    console.log(newNode)
    this.length++;
  }

  dequeue() {
    if(this.isEmpty()) throw new Error('The Queue is Empty!!!!');

    const temp = this.front;
    this.front = this.front.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }

  peek() {
    if (this.isEmpty()) return null;

    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

module.exports = Queue;