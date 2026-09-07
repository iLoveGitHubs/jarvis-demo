'use strict';

function handleFilter(req, res, query, store) {
  const completed = query.completed;
  if (completed === undefined) {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ error: 'completed parameter is required' }));
  }
  const want = completed === 'true';
  const filtered = store.todos.filter((t) => t.completed === want);
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(filtered));
}

module.exports = { handleFilter };
