'use strict';

const io = require('socket.io')(3000);
const family = io.of('/family');
const uuid = require('uuid').v4;

const todo = {}

// This connection will be over /
family.on('connection', socket => {
  console.log('Connected successfuly, your id is:', socket.id);

  socket.on('new_task', payload => {
    console.log('The task been added to the list');
    socket.emit('added', payload);
    const id = uuid();
    todo[id] = payload;
    // console.log(todo);
    family.emit('task', {
      id,
      payload: todo[id]
    })
  })

  socket.on('getListedTasks', () => {

    // console.log(Object.keys(todo))
    Object.keys(todo).forEach(id => {
      socket.emit('task', {
        id,
        payload: todo[id]
      })

    })

  })

  socket.on('finished_task', payload => {
    delete todo[payload.id];
    console.log(todo)
  })
})

// console.log(todo)