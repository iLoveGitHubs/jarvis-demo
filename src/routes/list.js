'use strict';

function handleList(req, res, store) {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(store.todos));
}

module.exports = { handleList };
