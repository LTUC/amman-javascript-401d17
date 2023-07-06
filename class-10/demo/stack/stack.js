'use strict';

const Node = require('../lib/node');

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if(this.isEmpty()) {
      this.top = newNode;
    } else {
      newNode.next = this.top; // Adding the next element to the new node to be the prev one
      this.top = newNode; // assigning the new node to the top of the stack
    }

    this.length++;
  }

  pop() {
    if(this.isEmpty()) throw new Error('The is Empty!!!');

    const temp = this.top;
    this.top = this.top.next;
    temp.next = null;
    this.length--;
    return temp.value;
  }

  peek() {
    if(this.isEmpty()) return null;

    return this.top.value;
  }

  isEmpty() {
    return this.top === null;

    // Or 
    // return this.length === 0

    // OR
    // if(this.top || this.length) return false;
    // else return true;

    // Or
    // if(this.top) return false;
    // else return true;
  }
}

module.exports = Stack;