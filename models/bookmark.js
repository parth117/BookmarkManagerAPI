/**
 * Bookmark Model
 * Represents a bookmark entity with properties for identification, metadata, and timestamps.
 */

class Bookmark {
  /**
   * Constructs a new Bookmark instance.
   * 
   * @param {string} id - Unique identifier for the bookmark.
   * @param {string} title - The title of the bookmark.
   * @param {string} url - The URL associated with the bookmark.
   * @param {string} [description] - Optional description for the bookmark.
   * @param {string} createdAt - Timestamp indicating when the bookmark was created.
   */
  constructor(id, title, url, description, createdAt) {
    this.id = id;
    this.title = title;
    this.url = url;
    this.description = description;
    this.createdAt = createdAt;
  }
}

// Export the Bookmark class so it can be used throughout the project
module.exports = Bookmark;