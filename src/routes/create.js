'use strict';

function handleCreate(req, res, body, store) {
  try {
    const item = { id: store.incId(), title: body.title, completed: false };
    store.todos.push(item);
    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(item));
  } catch (err) {
    res.writeHead(500);
    res.end(JSON.stringify({ error: 'internal error' }));
  }
}

module.exports = { handleCreate };
