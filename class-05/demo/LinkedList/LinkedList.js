'use strict';

const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(val) {
    const node = new Node(val)
    // console.log(node)
    if(!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while(currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    return this;

  }
}

// const ll = new LinkedList();
// ll.append(1)
// ll.append(2)
// ll.append('Waleed')
// console.log(ll)

module.exports = LinkedList