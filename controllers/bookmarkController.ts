/**
 * Bookmark Controller
 * Handles API requests related to bookmarks with proper TypeScript typings.
 */

import { Request, Response, NextFunction } from "express";
import { getAllBookmarks, getBookmarkById, createBookmark, updateBookmark, deleteBookmark } from "../services/bookmarkService";

/**
 * Validates whether a given URL is properly formatted.
 * @param {string} url - The URL to validate.
 * @returns {boolean} True if valid, false otherwise.
 */
const isValidUrl = (url: string): boolean => {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
};

/**
 * Retrieves all bookmarks.
 */
export const getAllBookmarksHandler = (req: Request, res: Response, next: NextFunction): void => {
    res.json(getAllBookmarks());
};

/**
 * Retrieves a specific bookmark by ID.
 */
export const getBookmarkByIdHandler = (req: Request, res: Response, next: NextFunction): void => {
    const bookmark = getBookmarkById(req.params.id);
    if (!bookmark) {
        res.status(404).json({ message: "Bookmark not found" });
        return;
    }
    res.json(bookmark);
};

/**
 * Creates a new bookmark.
 */
export const createBookmarkHandler = (req: Request, res: Response, next: NextFunction): void => {
    try {
        if (!req.body.title || !req.body.url || !isValidUrl(req.body.url)) {
            throw new Error("Valid title and URL are required");
        }
        const newBookmark = createBookmark(req.body);
        res.status(201).json(newBookmark);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
};

/**
 * Updates an existing bookmark by ID.
 */
export const updateBookmarkHandler = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const updatedBookmark = updateBookmark(req.params.id, req.body);
        res.json(updatedBookmark);
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "An unknown error occurred" });
        }
    }
};

/**
 * Deletes a bookmark by ID.
 */
export const deleteBookmarkHandler = (req: Request, res: Response, next: NextFunction): void => {
    if (deleteBookmark(req.params.id)) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: "Bookmark not found" });
    }
};