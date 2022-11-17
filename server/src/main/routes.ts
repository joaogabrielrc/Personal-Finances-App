import { Router } from 'express';
import accountRouter from './account/account-router';
import transactionRouter from './transaction/transaction-router';

const router = Router();

// accounts
router.use('/api/v1/accounts', accountRouter);

// transactions
router.use('/api/v1/transaction', transactionRouter);

export default router;
