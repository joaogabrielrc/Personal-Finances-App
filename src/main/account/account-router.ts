import { Router } from 'express';
import methodNotAllowedError from '../middleware/method-not-allowed';
import accountFactory from './accountFactory';

const accountRouter = Router();

accountRouter
  .route('/')
  // .get((request, response) => userFactory().getList(request, response))
  .post((request, response) => accountFactory().create(request, response))
  .all(methodNotAllowedError);

accountRouter
  .route('/:id')
  // .get((request, response) => userFactory().getDetail(request, response))
  // .patch((request, response) => userFactory().update(request, response))
  // .delete((request, response) => userFactory().delete(request, response))
  .all(methodNotAllowedError);

export default accountRouter;
