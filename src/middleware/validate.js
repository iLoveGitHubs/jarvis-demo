'use strict';

function validateTodoBody(body) {
  if (!body || typeof body.title !== 'string' || body.title.trim() === '') {
    return { valid: false, error: 'title is required and must be a non-empty string' };
  }
  return { valid: true };
}

module.exports = { validateTodoBody };
