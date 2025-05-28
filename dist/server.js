"use strict";
/**
 * Main Server File
 * Initializes the Express application and sets up middleware and routes.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express framework
const bookmarkRoutes_1 = __importDefault(require("./routes/bookmarkRoutes")); // Import bookmark routes
const logger_1 = __importDefault(require("./middleware/logger")); // Import logger middleware
const errorHandler_1 = __importDefault(require("./middleware/errorHandler")); // Import global error handler
const dotenv_1 = __importDefault(require("dotenv")); // Import dotenv for environment variable support
dotenv_1.default.config(); // Load environment variables from .env file
const app = (0, express_1.default)(); // Create an Express application instance
// Middleware to parse JSON request bodies
app.use(express_1.default.json());
// Activate logger middleware to log incoming requests
app.use(logger_1.default);
// Set up routes for bookmark-related operations
app.use("/api/bookmarks", bookmarkRoutes_1.default);
// Use centralized error handler middleware
app.use(errorHandler_1.default);
const PORT = Number(process.env.PORT) || 7007; // Define port using .env or fallback
// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
