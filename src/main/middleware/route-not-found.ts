import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

function notFound(request: Request, response: Response) {
  return response
    .status(StatusCodes.NOT_FOUND)
    .send('Route not found');
}

export default notFound;
