/**
 * Logger Middleware
 * Logs details of every incoming request, including method, URL, and timestamp.
 */

import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction): void => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    next();
};

export default logger;