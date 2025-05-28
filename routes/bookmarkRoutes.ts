/**
 * Bookmark Routes
 * Defines API endpoints for bookmark operations with proper TypeScript typings.
 */

import express, { Request, Response, NextFunction } from "express";
import { getAllBookmarksHandler, getBookmarkByIdHandler, createBookmarkHandler, updateBookmarkHandler, deleteBookmarkHandler } from "../controllers/bookmarkController";

const router = express.Router();

/**
 * GET all bookmarks.
 * Sends back a list of all stored bookmarks in JSON format.
 */
router.get("/", (req: Request, res: Response, next: NextFunction) => getAllBookmarksHandler(req, res, next));

/**
 * GET a single bookmark by ID.
 * Returns 404 if not found.
 */
router.get("/:id", (req: Request, res: Response, next: NextFunction) => getBookmarkByIdHandler(req, res, next));

/**
 * POST a new bookmark.
 * Requires title and URL in request body.
 */
router.post("/", (req: Request, res: Response, next: NextFunction) => createBookmarkHandler(req, res, next));

/**
 * PUT (Update) a bookmark by ID.
 */
router.put("/:id", (req: Request, res: Response, next: NextFunction) => updateBookmarkHandler(req, res, next));

/**
 * DELETE a bookmark by ID.
 */
router.delete("/:id", (req: Request, res: Response, next: NextFunction) => deleteBookmarkHandler(req, res, next));

export default router;