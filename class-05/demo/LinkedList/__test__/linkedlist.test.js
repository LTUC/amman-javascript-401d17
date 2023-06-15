'use strict';

const LinkedList = require('../LinkedList');

describe('testing the Linked List', () => {
  it('Creating a Linked List', () => {
    const list = new LinkedList();
    expect(list.head).toBeNull();
  });

  it('appending to linkedlist', () => {
    const list = new LinkedList();
    list.append('Alaa')
    expect(list.head.value).toEqual('Alaa');
    list.append('Mohammed')
    expect(list.head.next.value).toEqual('Mohammed');
    list.append('Laith')
    expect(list.head.next.next.value).toEqual('Laith');
  })
})