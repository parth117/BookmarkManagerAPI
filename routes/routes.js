const express = require('express');
const router = express.Router();
const bookmarkController = require('../controllers/bookmarkController');

// Route definitions
router.get('/bookmarks', bookmarkController.getAllBookmarks);
router.get('/bookmarks/:id', bookmarkController.getBookmarkById);
router.post('/bookmarks', bookmarkController.createBookmark);
router.put('/bookmarks/:id', bookmarkController.updateBookmark);
router.delete('/bookmarks/:id', bookmarkController.deleteBookmark);

module.exports = router;