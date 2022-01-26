import { login } from '../controller/authorization.controller';
import express from 'express';

const router = express.Router();

router.get('/login', login);

export default router;
