import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({
          status: 'error',
          message: error.message || 'An unexpected error occurred',
        });
      } else {
        
        res.status(500).json({
          status: 'error',
          message: 'An unexpected error occurred',
        });
      }
    }
  };

export default catchAsync;
