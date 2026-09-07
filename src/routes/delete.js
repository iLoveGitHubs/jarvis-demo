'use strict';

function handleDelete(req, res, id, store) {
  const idx = store.todos.findIndex((t) => t.id === Number(id));
  if (idx === -1) { res.writeHead(404); return res.end(JSON.stringify({ error: 'not found' })); }
  store.todos.splice(idx, 1);
  res.writeHead(204);
  res.end();
}

module.exports = { handleDelete };
