// Import the bookmarkService module, which contains the business logic for handling bookmarks.
const bookmarkService = require("../services/bookmarkService");

// Utility function for URL validation
// This function ensures that only properly formatted URLs are accepted.
const isValidUrl = (url) => {
    try {
        new URL(url); // If valid, the constructor succeeds
        return true;
    } catch {
        return false; // If an error occurs, the URL is invalid
    }
};

// Controller function to get all bookmarks
exports.getAllBookmarks = (req, res, next) => {
    try {
        // Fetch all bookmarks from the service layer
        const bookmarks = bookmarkService.getAllBookmarks();
        res.json(bookmarks); // Return the bookmarks as a JSON response
    } catch (error) {
        next(error); // Pass errors to the error-handling middleware
    }
};

// Controller function to get a single bookmark by ID
exports.getBookmarkById = (req, res, next) => {
    try {
        // Extract the bookmark ID from request parameters
        const bookmark = bookmarkService.getBookmarkById(req.params.id);
        if (bookmark) {
            res.json(bookmark); // If found, return the bookmark
        } else {
            res.status(404).json({ message: "Bookmark not found" }); // If not found, return a 404 error
        }
    } catch (error) {
        next(error);
    }
};

// Controller function to create a new bookmark
exports.createBookmark = (req, res, next) => {
    const { title, url, description } = req.body;

    // Validate input: title and URL must be provided and properly formatted
    if (!title || !url || !isValidUrl(url)) {
        return res.status(400).json({ message: "Invalid input! Title and a valid URL are required." });
    }

    try {
        // Create a new bookmark using the service layer
        const newBookmark = bookmarkService.createBookmark({ title, url, description });
        res.status(201).json(newBookmark); // Respond with 201 Created and return the new bookmark
    } catch (error) {
        next(error);
    }
};

// Controller function to update an existing bookmark
exports.updateBookmark = (req, res, next) => {
    try {
        // Attempt to update the bookmark using its ID and request body data
        const updatedBookmark = bookmarkService.updateBookmark(req.params.id, req.body);
        if (updatedBookmark) {
            res.json(updatedBookmark); // If successful, return updated bookmark
        } else {
            res.status(404).json({ message: "Bookmark not found" }); // If not found, return a 404 error
        }
    } catch (error) {
        next(error);
    }
};

// Controller function to delete a bookmark
exports.deleteBookmark = (req, res, next) => {
    try {
        const success = bookmarkService.deleteBookmark(req.params.id);
        if (success) {
            res.json({ message: "Bookmark deleted" }); // If deleted successfully, confirm with a message
        } else {
            res.status(404).json({ message: "Bookmark not found" }); // If not found, return a 404 error
        }
    } catch (error) {
        next(error);
    }
};