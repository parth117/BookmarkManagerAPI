/**
 * Bookmark Service
 * Provides functions to manage an in-memory list of bookmarks.
 */

const bookmarks = []; // Store bookmarks in an in-memory array

/**
 * Retrieves all bookmarks.
 * @returns {Array} List of all stored bookmarks.
 */
exports.getAllBookmarks = () => {
    return bookmarks;
};

/**
 * Finds a bookmark by its unique ID.
 * @param {string} id - The ID of the bookmark to retrieve.
 * @returns {Object|null} The bookmark object if found, otherwise null.
 */
exports.getBookmarkById = (id) => {
    return bookmarks.find(bookmark => bookmark.id === id);
};

/**
 * Creates a new bookmark entry.
 * @param {Object} data - Bookmark data containing title, URL, and optional description.
 * @returns {Object} Newly created bookmark.
 * @throws {Error} If title or URL is missing.
 */
exports.createBookmark = (data) => {
    if (!data.title || !data.url) {
        throw new Error('Title and URL are required'); // Enforce required fields
    }

    const newBookmark = {
        id: (bookmarks.length + 1).toString(), // Generate a simple unique ID
        title: data.title,
        url: data.url,
        description: data.description || '', // Default to empty string if no description is provided
        createdAt: new Date().toISOString() // Store timestamp
    };

    bookmarks.push(newBookmark); // Add new bookmark to the array
    return newBookmark;
};

/**
 * Updates an existing bookmark by ID.
 * @param {string} id - The ID of the bookmark to update.
 * @param {Object} data - Updated bookmark data.
 * @returns {Object} Updated bookmark.
 * @throws {Error} If bookmark is not found.
 */
exports.updateBookmark = (id, data) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex === -1) {
        throw new Error('Bookmark not found'); // Handle case where ID doesn't exist
    }

    // Merge existing bookmark data with new updates
    const updatedBookmark = { ...bookmarks[bookmarkIndex], ...data };
    bookmarks[bookmarkIndex] = updatedBookmark; // Save updates
    return updatedBookmark;
};

/**
 * Deletes a bookmark by ID.
 * @param {string} id - The ID of the bookmark to delete.
 * @returns {boolean} True if deletion was successful, false if bookmark was not found.
 */
exports.deleteBookmark = (id) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex !== -1) {
        bookmarks.splice(bookmarkIndex, 1); // Remove bookmark from the array
        return true;
    }
    return false; // Indicate failure to delete if ID is not found
};