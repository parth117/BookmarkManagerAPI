const bookmarkService = require('../services/bookmarkService');

exports.getAllBookmarks = (req, res) => {
    const bookmarks = bookmarkService.getAllBookmarks();
    res.json(bookmarks);
};

exports.getBookmarkById = (req, res) => {
    const bookmark = bookmarkService.getBookmarkById(req.params.id);
    if (bookmark) {
        res.json(bookmark);
    } else {
        res.status(404).json({ message: 'Bookmark not found' });
    }
};

exports.createBookmark = (req, res) => {
    try {
        const newBookmark = bookmarkService.createBookmark(req.body);
        res.status(201).json(newBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateBookmark = (req, res) => {
    try {
        const updatedBookmark = bookmarkService.updateBookmark(req.params.id, req.body);
        res.json(updatedBookmark);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteBookmark = (req, res) => {
    const success = bookmarkService.deleteBookmark(req.params.id);
    if (success) {
        res.json({ message: 'Bookmark deleted' });
    } else {
        res.status(404).json({ message: 'Bookmark not found' });
    }
};  