"use strict";
/**
 * Bookmark Controller
 * Handles API requests related to bookmarks with proper TypeScript typings.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookmarkHandler = exports.updateBookmarkHandler = exports.createBookmarkHandler = exports.getBookmarkByIdHandler = exports.getAllBookmarksHandler = void 0;
const bookmarkService_1 = require("../services/bookmarkService");
/**
 * Validates whether a given URL is properly formatted.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
const isValidUrl = (url) => {
    try {
        new URL(url);
        return true;
    }
    catch (_a) {
        return false;
    }
};
/**
 * Retrieves all bookmarks.
 */
const getAllBookmarksHandler = (req, res, next) => {
    res.json((0, bookmarkService_1.getAllBookmarks)());
};
exports.getAllBookmarksHandler = getAllBookmarksHandler;
/**
 * Retrieves a specific bookmark by ID.
 */
const getBookmarkByIdHandler = (req, res, next) => {
    const bookmark = (0, bookmarkService_1.getBookmarkById)(req.params.id);
    if (!bookmark) {
        res.status(404).json({ message: "Bookmark not found" });
        return;
    }
    res.json(bookmark);
};
exports.getBookmarkByIdHandler = getBookmarkByIdHandler;
/**
 * Creates a new bookmark.
 */
const createBookmarkHandler = (req, res, next) => {
    try {
        if (!req.body.title || !req.body.url || !isValidUrl(req.body.url)) {
            throw new Error("Valid title and URL are required");
        }
        const newBookmark = (0, bookmarkService_1.createBookmark)(req.body);
        res.status(201).json(newBookmark);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
};
exports.createBookmarkHandler = createBookmarkHandler;
/**
 * Updates an existing bookmark by ID.
 */
const updateBookmarkHandler = (req, res, next) => {
    try {
        const updatedBookmark = (0, bookmarkService_1.updateBookmark)(req.params.id, req.body);
        res.json(updatedBookmark);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
};
exports.updateBookmarkHandler = updateBookmarkHandler;
/**
 * Deletes a bookmark by ID.
 */
const deleteBookmarkHandler = (req, res, next) => {
    if ((0, bookmarkService_1.deleteBookmark)(req.params.id)) {
        res.status(204).send();
    }
    else {
        res.status(404).json({ message: "Bookmark not found" });
    }
};
exports.deleteBookmarkHandler = deleteBookmarkHandler;
