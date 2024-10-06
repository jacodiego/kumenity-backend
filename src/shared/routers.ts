import { Router } from 'express';

import authRouter from '@/features/account/infrastructure/adapters/http/auth.router';

const router = Router();

router.use('/api/v1/auth', authRouter);

export default router;
