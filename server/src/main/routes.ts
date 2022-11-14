import { Router } from 'express';
import accountRouter from './account/account-router';
import authRouter from './auth/auth-router';
import authMiddleware from './middleware/auth/authentication';

const router = Router();

// authentication
router.use('/api/v1/auth', authRouter);

// accounts
router.use('/api/v1/accounts', authMiddleware, accountRouter);

export default router;
