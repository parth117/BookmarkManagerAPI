/**
 * Logger Middleware
 * Logs details of every incoming HTTP request, including method, URL, and timestamp.
 */

const logger = (req, res, next) => {
  // Capture the current timestamp in a readable ISO format
  const timestamp = new Date().toISOString();
  
  // Log the request details in the console
  console.log(`[${timestamp}] ${req.method} ${req.url}`);

  // Pass control to the next middleware or route handler
  next();
};

// Export the logger middleware for use in the application
module.exports = logger;