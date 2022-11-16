import { Router } from 'express';
import accountFormMiddleware from '../middleware/account/account-form-validation';
import methodNotAllowedError from '../middleware/method-not-allowed';
import accountFactory from './account-factory';

const accountRouter = Router();

accountRouter
  .route('/')
  .post(accountFormMiddleware, (request, response) =>
    accountFactory().create(request, response)
  )
  .all(methodNotAllowedError);

export default accountRouter;
