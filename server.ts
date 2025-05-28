/**
 * Main Server File
 * Initializes the Express application and sets up middleware and routes.
 */

import express from "express"; // Import Express framework
import bookmarkRoutes from "./routes/bookmarkRoutes"; // Import bookmark routes
import logger from "./middleware/logger"; // Import logger middleware
import errorHandler from "./middleware/errorHandler"; // Import global error handler
import dotenv from "dotenv"; // Import dotenv for environment variable support


dotenv.config(); // Load environment variables from .env file

const app = express(); // Create an Express application instance

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Activate logger middleware to log incoming requests
app.use(logger);

// Set up routes for bookmark-related operations
app.use("/api/bookmarks", bookmarkRoutes);

// Use centralized error handler middleware
app.use(errorHandler);

const PORT: number = Number(process.env.PORT) || 7007; // Define port using .env or fallback

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});