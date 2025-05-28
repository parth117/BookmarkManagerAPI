/**
 * Bookmark Model
 * Defines the structure of a bookmark entity with TypeScript.
 */

interface Bookmark {
    id: string;
    title: string;
    url: string;
    description?: string; // Optional description
    createdAt: string;
}

class BookmarkClass implements Bookmark {
    constructor(
        public id: string,
        public title: string,
        public url: string,
        public description: string = "",
        public createdAt: string = new Date().toISOString()
    ) {}
}

export default BookmarkClass;