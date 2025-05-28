/**
 * Bookmark Service
 * Provides functions to manage an in-memory list of bookmarks using TypeScript.
 */

import BookmarkClass from "../models/bookmark"; // Import Bookmark model

// Store bookmarks in an in-memory array
const bookmarks: BookmarkClass[] = [];

/**
 * Retrieves all bookmarks.
 * @returns {BookmarkClass[]} List of all stored bookmarks.
 */
export const getAllBookmarks = (): BookmarkClass[] => {
    return bookmarks;
};

/**
 * Finds a bookmark by its unique ID.
 * @param {string} id - The ID of the bookmark to retrieve.
 * @returns {BookmarkClass | undefined} The bookmark object if found, otherwise undefined.
 */
export const getBookmarkById = (id: string): BookmarkClass | undefined => {
    return bookmarks.find(bookmark => bookmark.id === id);
};

/**
 * Creates a new bookmark entry using the Bookmark model.
 * @param {Partial<BookmarkClass>} data - Bookmark data containing title, URL, and optional description.
 * @returns {BookmarkClass} Newly created bookmark.
 * @throws {Error} If title or URL is missing.
 */
export const createBookmark = (data: Partial<BookmarkClass>): BookmarkClass => {
    if (!data.title || !data.url) {
        throw new Error("Title and URL are required"); // Enforce required fields
    }

    const newBookmark = new BookmarkClass(
        (bookmarks.length + 1).toString(),
        data.title,
        data.url,
        data.description,
        new Date().toISOString()
    );

    bookmarks.push(newBookmark); // Add new bookmark to the array
    return newBookmark;
};

/**
 * Updates an existing bookmark by ID.
 * @param {string} id - The ID of the bookmark to update.
 * @param {Partial<BookmarkClass>} data - Updated bookmark data.
 * @returns {BookmarkClass} Updated bookmark.
 * @throws {Error} If bookmark is not found.
 */
export const updateBookmark = (id: string, data: Partial<BookmarkClass>): BookmarkClass => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex === -1) {
        throw new Error("Bookmark not found"); // Handle case where ID doesn't exist
    }

    // Merge existing bookmark data with new updates
    const updatedBookmark = { ...bookmarks[bookmarkIndex], ...data };
    bookmarks[bookmarkIndex] = updatedBookmark as BookmarkClass; // Save updates
    return updatedBookmark as BookmarkClass;
};

/**
 * Deletes a bookmark by ID.
 * @param {string} id - The ID of the bookmark to delete.
 * @returns {boolean} True if deletion was successful, false if bookmark was not found.
 */
export const deleteBookmark = (id: string): boolean => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex !== -1) {
        bookmarks.splice(bookmarkIndex, 1); // Remove bookmark from the array
        return true;
    }
    return false; // Indicate failure to delete if ID is not found
};