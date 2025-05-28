"use strict";
/**
 * Bookmark Model
 * Defines the structure of a bookmark entity with TypeScript.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class BookmarkClass {
    constructor(id, title, url, description = "", createdAt = new Date().toISOString()) {
        this.id = id;
        this.title = title;
        this.url = url;
        this.description = description;
        this.createdAt = createdAt;
    }
}
exports.default = BookmarkClass;
