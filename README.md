# Bookmark Manager API (Node.js Beginner Project)

## Overview

The **Bookmark Manager API** is a beginner-friendly backend project to help you learn Node.js, Express, REST API fundamentals, and good coding practices including clean folder structure and modularization.

You will build a backend-only API (no front-end) that lets users manage a collection of bookmarks (web URLs). The API will allow users to create, read, update, and delete bookmarks. You'll learn about HTTP methods, routing, middleware, validation, and (optionally) simple data persistence.

---

## Learning Goals

By completing this project, you will:
- Understand how to set up a Node.js & Express backend.
- Learn about RESTful APIs and HTTP methods (GET, POST, PUT, DELETE).
- Use modular folder structure for controllers, routes, models, and services.
- Implement middleware (e.g., logging).
- Practice input validation (e.g., valid URLs).
- Test APIs using Postman or similar tools.
- (Optional) Store data in a local JSON file.
- Apply clean code and best practices.

---

## Prerequisites

- Basic familiarity with JavaScript.
- Node.js and npm installed ([Node.js download](https://nodejs.org/en/download/)).
- A code editor (e.g., [VSCode](https://code.visualstudio.com/)).
- API testing tool (e.g., [Postman](https://www.postman.com/downloads/)).

---

## Key Concepts & Resources

- **Node.js Basics:**  
  [Node.js Official Docs](https://nodejs.org/en/docs)
- **Express.js Basics:**  
  [Express.js Guide](https://expressjs.com/en/starter/hello-world.html)
- **RESTful API Design:**  
  [REST API Tutorial](https://restfulapi.net/)
- **Folder Structure & Architecture:**  
  [Node.js Project Structure Best Practices](https://www.freecodecamp.org/news/how-to-structure-a-nodejs-project/)
- **Middleware:**  
  [Express Middleware Explained](https://expressjs.com/en/guide/using-middleware.html)
- **Input Validation:**  
  [How to validate URLs in JavaScript](https://www.freecodecamp.org/news/how-to-write-a-javascript-validator-for-url/)
- **Testing APIs:**  
  [Postman Beginner’s Guide](https://learning.postman.com/docs/getting-started/introduction/)

---

## Project Requirements

### 1. Bookmark Properties

Each bookmark should have:
- **id** (unique identifier, e.g., UUID or incremental number)
- **title** (string, required)
- **url** (string, required, must be valid URL)
- **description** (string, optional)
- **createdAt** (timestamp, auto-generated)

---

### 2. API Endpoints

#### `GET /api/bookmarks`
- List all bookmarks.

#### `GET /api/bookmarks/:id`
- Get details of a single bookmark.

#### `POST /api/bookmarks`
- Add a new bookmark.
- Body: `{ "title": "...", "url": "...", "description": "..." }`
- Validate that title and url are present and url is valid.

#### `PUT /api/bookmarks/:id`
- Update an existing bookmark.
- Body can include any field except `id` and `createdAt`.

#### `DELETE /api/bookmarks/:id`
- Delete a bookmark by id.

---

### 3. Folder Structure

```
bookmark-api/
├── package.json
├── server.js
├── /controllers
│   └── bookmarkController.js
├── /routes
│   └── bookmarkRoutes.js
├── /models
│   └── bookmark.js
├── /services
│   └── bookmarkService.js
├── /middlewares
│   └── logger.js
└── /data
    └── bookmarks.json   // (Optional) For persistent storage
```

---

### 4. Implementation Guidelines

- **Controllers** handle API request logic.
- **Services** handle data operations (read/write from array or JSON file).
- **Models** define what a Bookmark object looks like.
- **Routes** define endpoint paths and map them to controller functions.
- **Middleware** (e.g., logger) to log incoming requests.
- **Data**: Start with an in-memory array; optionally, save to `bookmarks.json`.

---

### 5. Good Practices

- Use clear, descriptive function and variable names.
- Keep each file focused on a single responsibility.
- Use try/catch for error handling.
- Validate input data.
- Comment your code for clarity.
- Commit your changes often with meaningful messages.

---

### 6. Optional Extensions

- Search bookmarks by title or URL.
- Add "tags" to bookmarks (array of strings).
- Mark bookmarks as "favorite".
- Pagination for large lists.
- (Bonus) Add simple authentication (user/password).

---

## Getting Started

1. **Initialize a Node.js project**
   ```bash
   mkdir bookmark-api
   cd bookmark-api
   npm init -y
   npm install express
   ```

2. **Create the folder structure as shown above.**

3. **Start with a simple Express server in `server.js`:**
   ```js
   const express = require('express');
   const app = express();
   app.use(express.json());
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
   ```

4. **Follow the folder structure and implement features step by step:**
   - Set up routes and controllers.
   - Add services and (optional) JSON data persistence.
   - Add middleware for logging.
   - Validate inputs in controllers.

5. **Test your endpoints using Postman.**

---

## Example Bookmark Object

```json
{
  "id": "1",
  "title": "MDN Web Docs",
  "url": "https://developer.mozilla.org/",
  "description": "Resources for developers, by developers.",
  "createdAt": "2025-04-28T07:50:00Z"
}
```

---

## Helpful Tutorials

- [Build a Simple REST API with Node and Express](https://www.digitalocean.com/community/tutorials/nodejs-express-rest-api)
- [Node.js + Express CRUD Example](https://bezkoder.com/node-express-mongodb-crud-rest-api/)
- [Logging Middleware in Express](https://expressjs.com/en/resources/middleware/morgan.html)
- [How to Validate URLs in JavaScript](https://www.freecodecamp.org/news/how-to-write-a-javascript-validator-for-url/)

---

## Final Tips

- Don’t rush! Build and test one feature at a time.
- Read error messages and use console.log to debug.
- Google is your friend—search for any error or concept you don’t understand.
- Ask for code review or feedback if possible.

**Happy learning and coding!**
