---
id: URD-SEARCH
title: Todo Search & Filter
version: 1.0.0
status: active
---

# URD-SEARCH: Todo Search & Filter

Search and filter capabilities for the Todo API. A new URD document covering
read-only query features that: search todos by title keyword and filter by completion status.

## Requirements

### REQ-007: Search todos by title
`GET /todos/search?q=keyword` returns all todos whose title contains the keyword (case-insensitive).

**Acceptance Criteria:**
- AC1: GET /todos/search?q=buy returns todos with "buy" in the title
- AC2: No matches returns 200 with empty array
- AC3: Missing q parameter returns 400

**Affected Files:**
- src/routes/search.js

### REQ-008: Filter todos by completion status
`GET /todos/filter?completed=true` returns todos filtered by their completed field.

**Acceptance Criteria:**
- AC1: completed=true returns only completed todos
- AC2: completed=false returns only incomplete todos
- AC3: Missing completed parameter returns 400

**Affected Files:**
- src/routes/filter.js
