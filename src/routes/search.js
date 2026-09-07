'use strict';

function handleSearch(req, res, query, store) {
  const q = query.q;
  if (q === undefined || q === '') {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'q parameter is required' }));
  }
  const keyword = String(q).toLowerCase();
  const matches = store.todos.filter((t) => t.title.toLowerCase().includes(keyword));
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(matches));
}

module.exports = { handleSearch };
