import CustomError from '../error/CustomError';
import type { Request, Response, NextFunction } from 'express';

const globalErrorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): Response => {
  if (error instanceof CustomError) {
    return res
      .status(error.code)
      .json({ type: error.type, issue: error.serializeError() });
  }

  return res.status(500).json({ type: 'Internal Error', error: error.message });
};

export default globalErrorHandler;
