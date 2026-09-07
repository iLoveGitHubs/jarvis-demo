# Jarvis Demo — Todo API

A minimal Todo REST API used to demo the **Jarvis** (URD Guardian) agent.

Jarvis reads the URD in `docs/urd/` and checks every commit against the requirements:
which files a commit touched vs. which files the claimed `REQ-ID` says it should touch.

## Run

```bash
node src/app.js
```

## Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST   | /todos | Create a todo |
| GET    | /todos | List all todos |
| PATCH  | /todos/:id | Mark complete |
| DELETE | /todos/:id | Delete a todo |

## Check with Jarvis

From the Jarvis project:

```bash
node src/index.js check recent --root D:\jarvis-demo
```
