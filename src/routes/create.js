'use strict';

function handleCreate(req, res, body, store) {
  const item = { id: store.incId(), title: body.title, completed: false };
  store.todos.push(item);
  res.writeHead(201, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(item));
}

module.exports = { handleCreate };
