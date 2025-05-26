/**
 * Main Server File
 * Initializes the Express application and sets up routing.
 */

const express = require("express"); // Import Express framework
const bookmarkRoutes = require("./routes/bookmarkRoutes"); // Import bookmark routes

const app = express(); // Create an Express application instance

// Middleware to parse JSON request bodies
app.use(express.json()); 

// Set up routes for bookmark-related operations
// All requests to /api/bookmarks/ will be handled by bookmarkRoutes
app.use("/api/bookmarks", bookmarkRoutes); 

const PORT = 7007; // Define the port for the server

// Start the Express server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));