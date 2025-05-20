const bookmarks = [];

exports.getAllBookmarks = () => {
    return bookmarks;
};

exports.getBookmarkById = (id) => {
    return bookmarks.find(bookmark => bookmark.id === id);
};

exports.createBookmark = (data) => {
    if (!data.title || !data.url) {
        throw new Error('Title and URL are required');
    }

    const newBookmark =     {
        id: (bookmarks.length + 1).toString(),
        title: data.title,
        url: data.url,
        description: data.description || '',
        createdAt: new Date().toISOString()
    };

    bookmarks.push(newBookmark);
    return newBookmark;
};

exports.updateBookmark = (id, data) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex === -1) {
        throw new Error('Bookmark not found');
    }

    const updatedBookmark = { ...bookmarks[bookmarkIndex], ...data };
    bookmarks[bookmarkIndex] = updatedBookmark;
    return updatedBookmark;
};

exports.deleteBookmark = (id) => {
    const bookmarkIndex = bookmarks.findIndex(bookmark => bookmark.id === id);
    if (bookmarkIndex !== -1) {
        bookmarks.splice(bookmarkIndex, 1);
        return true;
    }
    return false;
};