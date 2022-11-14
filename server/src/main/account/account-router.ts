import { Router } from 'express';
import methodNotAllowedError from '../middleware/method-not-allowed';
import accountFactory from './account-factory';
import accountFormMiddleware from '../middleware/account/account-form-validation';

const accountRouter = Router();

accountRouter
  .route('/')
  .post(accountFormMiddleware, (request, response) =>
    accountFactory().create(request, response)
  )
  .all(methodNotAllowedError);

accountRouter.route('/:id').all(methodNotAllowedError);

export default accountRouter;
