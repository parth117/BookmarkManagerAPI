"use strict";
/**
 * Bookmark Routes
 * Defines API endpoints for bookmark operations with proper TypeScript typings.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bookmarkController_1 = require("../controllers/bookmarkController");
const router = express_1.default.Router();
/**
 * GET all bookmarks.
 * Sends back a list of all stored bookmarks in JSON format.
 */
router.get("/", (req, res, next) => (0, bookmarkController_1.getAllBookmarksHandler)(req, res, next));
/**
 * GET a single bookmark by ID.
 * Returns 404 if not found.
 */
router.get("/:id", (req, res, next) => (0, bookmarkController_1.getBookmarkByIdHandler)(req, res, next));
/**
 * POST a new bookmark.
 * Requires title and URL in request body.
 */
router.post("/", (req, res, next) => (0, bookmarkController_1.createBookmarkHandler)(req, res, next));
/**
 * PUT (Update) a bookmark by ID.
 */
router.put("/:id", (req, res, next) => (0, bookmarkController_1.updateBookmarkHandler)(req, res, next));
/**
 * DELETE a bookmark by ID.
 */
router.delete("/:id", (req, res, next) => (0, bookmarkController_1.deleteBookmarkHandler)(req, res, next));
exports.default = router;
