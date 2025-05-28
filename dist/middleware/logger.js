"use strict";
/**
 * Logger Middleware
 * Logs details of every incoming request, including method, URL, and timestamp.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};
exports.default = logger;
