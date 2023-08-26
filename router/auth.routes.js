import express from 'express';
import { login, register, user } from '../controllers/auth.controller.js';
import { authMiddleware } from '../middleware/auth.middleware.js';

const router = express.Router();

router.post('/auth/register', register);
router.post('/auth/login', login);
router.get('/auth/user', authMiddleware, user);

export default router;