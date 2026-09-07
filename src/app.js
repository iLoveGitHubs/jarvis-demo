'use strict';

const http = require('http');

const todos = [];
let nextId = 1;

const server = http.createServer((req, res) => {
  if (req.url === '/health') { res.writeHead(200); return res.end('ok'); }
  res.writeHead(404);
  res.end(JSON.stringify({ error: 'not found' }));
});

if (require.main === module) {
  server.listen(3000, () => console.log('todo-api on :3000'));
}

module.exports = { server, todos, nextId: () => nextId, incId: () => nextId++ };
