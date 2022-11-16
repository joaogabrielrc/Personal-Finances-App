import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthenticatedError } from '../../error';
import ForbiddenError from '../../error/ForbiddenError';

export interface AuthRequest extends Request {
  authUser?: {
    id: string;
    email: string;
    iat: number;
    exp: number;
  };
}

function authMiddleware(
  request: AuthRequest,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer '))
    throw new ForbiddenError('No token provided');

  const token = authHeader.split('Bearer ').at(1) ?? '';
  const JWT_SECRET = process.env.JWT_SECRET ?? '';

  try {
    const decoded: any = jwt.verify(token, JWT_SECRET);
    request.authUser = decoded;
    next();
  } catch (error) {
    throw new UnauthenticatedError('User is not authenticated');
  }
}

export default authMiddleware;
