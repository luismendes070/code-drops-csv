// ChatGPT
import { Request, Response, NextFunction } from 'express';

// Middleware para tratamento de erros
export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    console.error(err.stack); // Log do erro

    // Defina o status de resposta
    res.status(500).json({
        error: 'Internal Server Error',
        message: err.message
    });
}
