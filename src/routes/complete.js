'use strict';

function handleComplete(req, res, id, store) {
  const item = store.todos.find((t) => t.id === Number(id));
  if (!item) { res.writeHead(404); return res.end(JSON.stringify({ error: 'not found' })); }
  item.completed = true;
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(item));
}

module.exports = { handleComplete };
