import { Router } from 'express';
import { authController } from '@/config/containers';

const router = Router();

router.post('/sign-up', async (req, res) => {
    try {
        console.log(req.body);
        return res.status(201).json(await authController.signUp(req.body));
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
        console.log(error);
        return res.status(error.status).json({ error: error.message });
    }
});

export default router;
