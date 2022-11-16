import { Router } from 'express';
import accountRouter from './account/account-router';

const router = Router();

router.use('/api/v1/accounts', accountRouter);

export default router;
