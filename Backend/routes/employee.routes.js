import express from 'express';
import { loginEmployee, logoutEmployee, markAttendance  } from '../controllers/employee.controller.js';
import { verifyEmployee } from '../middlewares/employee.auth.js';
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() }); 

const router = express.Router();

// POST /api/employee/login
router.post('/login', loginEmployee);

router.get('/logout', logoutEmployee);

router.post("/mark/attendence", upload.single("photo"), markAttendance);

// Add more employee routes here later
export default router;
