import { Router } from 'express';
import { authFactory } from './auth-factory';
import methodNotAllowedError from '../middleware/method-not-allowed';
import loginFormMiddleware from '../middleware/auth/login-form';
import authMiddleware from '../middleware/auth/authentication';

const authRouter = Router();

authRouter
  .route('/refresh')
  .post(authMiddleware, (request, response) =>
    authFactory().refresh(request, response)
  )
  .all(methodNotAllowedError);

authRouter
  .route('/')
  .post(loginFormMiddleware, (request, response) =>
    authFactory().login(request, response)
  )
  .all(methodNotAllowedError);

export default authRouter;
