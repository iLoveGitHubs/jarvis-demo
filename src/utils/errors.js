'use strict';

function sendError(res, code, message) {
  const status = code || 500;
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: message, code: status }));
}

module.exports = { sendError };
