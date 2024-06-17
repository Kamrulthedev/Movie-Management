import express from 'express';
import { authControllers } from './auth.controllat';


const router = express.Router();

router.post("/register", authControllers.register);
router.post("/login", authControllers.login);

export const AuthRoutes = router;