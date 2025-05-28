"use strict";
/**
 * Error Handling Middleware
 * Centralizes error management by formatting responses properly.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log error details
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
};
exports.default = errorHandler;
