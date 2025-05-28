"use strict";
/**
 * Bookmark Service
 * Provides functions to manage an in-memory list of bookmarks using TypeScript.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBookmark = exports.updateBookmark = exports.createBookmark = exports.getBookmarkById = exports.getAllBookmarks = void 0;
const bookmark_1 = __importDefault(require("../models/bookmark")); // Import Bookmark model
// Store bookmarks in an in-memory array
const bookmarks = [];
/**
 * Retrieves all bookmarks.
 * @returns {BookmarkClass[]} List of all stored bookmarks.
 */
const getAllBookmarks = () => {
    return bookmarks;
};
exports.getAllBookmarks = getAllBookmarks;
/**
 * Finds a bookmark by its unique ID.
 * @param {string} id - The ID of the bookmark to retrieve.
 * @returns {BookmarkClass | undefined} The bookmark object if found, otherwise undefined.
 */
const getBookmarkById = (id) => {
    return bookmarks.find(bookmark => bookmark.id === id);
};
exports.getBookmarkById = getBookmarkById;
/**
 * Creates a new bookmark entry using the Bookmark model.
 * @param {Partial<BookmarkClass>} data - Bookmark data containing title, URL, and optional description.
 * @returns {BookmarkClass} Newly created bookmark.
 * @throws {Error} If title or URL is missing.
 */
const createBookmark = (data) => {
    if (!data.title || !data.url) {
        throw new Error("Title and URL are required"); // Enforce required fields
    }
    const newBookmark = new bookmark_1.default((bookmarks.length + 1).toString(), data.title, data.url, data.description, new Date().toISOString());
    bookmarks.push(newBookmark); // Add new bookmark to the array
    return newBookmark;
};
exports.createBookmark = createBookmark;
/**
 * Updates an existing bookmark by ID.
 * @param {string} id - The ID of the bookmark to update.
 * @param {Partial<BookmarkClass>} data - Updated bookmark data.
 * @returns {BookmarkClass} Updated bookmark.
 * @throws {Error} If bookmark is not found.
 */
const updateBookmark = (id, data) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex === -1) {
        throw new Error("Bookmark not found"); // Handle case where ID doesn't exist
    }
    // Merge existing bookmark data with new updates
    const updatedBookmark = Object.assign(Object.assign({}, bookmarks[bookmarkIndex]), data);
    bookmarks[bookmarkIndex] = updatedBookmark; // Save updates
    return updatedBookmark;
};
exports.updateBookmark = updateBookmark;
/**
 * Deletes a bookmark by ID.
 * @param {string} id - The ID of the bookmark to delete.
 * @returns {boolean} True if deletion was successful, false if bookmark was not found.
 */
const deleteBookmark = (id) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex !== -1) {
        bookmarks.splice(bookmarkIndex, 1); // Remove bookmark from the array
        return true;
    }
    return false; // Indicate failure to delete if ID is not found
};
exports.deleteBookmark = deleteBookmark;
