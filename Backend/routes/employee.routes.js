import express from 'express';
import { loginEmployee, logoutEmployee } from '../controllers/employee.controller.js';

const router = express.Router();

// POST /api/employee/login
router.post('/login', loginEmployee);

router.get('/logout', logoutEmployee);

// Add more employee routes here later
export default router;
