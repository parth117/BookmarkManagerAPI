/**
 * Bookmark Routes
 * Defines API endpoints for managing bookmarks using Express.js.
 */

const express = require("express");
const router = express.Router(); // Create a new Express router instance
const bookmarkController = require("../controllers/bookmarkController"); // Import the controller for handling bookmark operations

/**
 * Route to get all bookmarks
 * GET /api/bookmarks/
 */
router.get("/", bookmarkController.getAllBookmarks);

/**
 * Route to get a single bookmark by ID
 * GET /api/bookmarks/:id
 */
router.get("/:id", bookmarkController.getBookmarkById);

/**
 * Route to create a new bookmark
 * POST /api/bookmarks/
 */
router.post("/", bookmarkController.createBookmark);

/**
 * Route to update an existing bookmark by ID
 * PUT /api/bookmarks/:id
 */
router.put("/:id", bookmarkController.updateBookmark);

/**
 * Route to delete a bookmark by ID
 * DELETE /api/bookmarks/:id
 */
router.delete("/:id", bookmarkController.deleteBookmark);

// Export the router so it can be used in server.js
module.exports = router;