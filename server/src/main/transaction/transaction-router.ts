import { Router } from 'express';
import methodNotAllowedError from '../middleware/method-not-allowed';
import transactionFormMiddleware from '../middleware/transaction/transaction-form-validation';
import incomeFactory from './income/income-factory';

const transactionRouter = Router();

transactionRouter
  .route('/incomes')
  .post(transactionFormMiddleware, (request, response) =>
    incomeFactory().create(request, response)
  )
  .all(methodNotAllowedError);

export default transactionRouter;
