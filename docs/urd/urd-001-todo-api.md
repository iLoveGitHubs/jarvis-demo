---
id: URD-TODO
title: Todo REST API
version: 1.0.0
status: active
---

# URD-TODO: Todo REST API

A minimal Todo REST API. Each requirement lists the source file that implements it;
the Jarvis agent checks that commits touch the right files for the requirements they claim.

## Requirements

### REQ-001: Create a todo item
`POST /todos` creates a new todo and returns 201 with the created item.

**Acceptance Criteria:**
- AC1: POST /todos with valid body returns 201
- AC2: Response body contains id, title, completed=false
- AC3: Missing title returns 400

**Affected Files:**
- src/routes/create.js

### REQ-002: List all todos
`GET /todos` returns the full list of todo items.

**Acceptance Criteria:**
- AC1: GET /todos returns 200 with an array
- AC2: Empty store returns []

**Affected Files:**
- src/routes/list.js

### REQ-003: Mark a todo complete
`PATCH /todos/:id` sets `completed=true` on the matching todo.

**Acceptance Criteria:**
- AC1: PATCH /todos/:id returns 200 with completed=true
- AC2: Unknown id returns 404

**Affected Files:**
- src/routes/complete.js

### REQ-004: Delete a todo
`DELETE /todos/:id` removes the todo from the store.

**Acceptance Criteria:**
- AC1: DELETE /todos/:id returns 204
- AC2: Unknown id returns 404

**Affected Files:**
- src/routes/delete.js

### REQ-005: Input validation
A validation middleware rejects requests with an empty or non-string title.

**Acceptance Criteria:**
- AC1: Empty title rejected with 400
- AC2: Non-string title rejected with 400

**Affected Files:**
- src/middleware/validate.js

### REQ-006: Error handling
A shared error helper formats consistent JSON error responses.

**Acceptance Criteria:**
- AC1: sendError(res, code, message) writes JSON {error, message}
- AC2: Default code is 500 when omitted

**Affected Files:**
- src/utils/errors.js
