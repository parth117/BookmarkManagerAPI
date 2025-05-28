/**
 * Error Handling Middleware
 * Centralizes error management by formatting responses properly.
 */

import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack); // Log error details
    
    res.status(err.status || 500).json({
        message: err.message || "Internal Server Error",
    });
};

export default errorHandler;