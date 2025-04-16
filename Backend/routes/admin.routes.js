import express from 'express';
import { registerAdmin ,loginAdmin,logoutAdmin, registerEmployee, getEmployeeAttendance} from '../controllers/admin.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router();

// Admin registration route
router.post('/register', registerAdmin);

router.post("/login", loginAdmin);

router.get("/logout", authMiddleware, logoutAdmin);

router.post('/register/employee', authMiddleware, registerEmployee);

router.get("/attendance/:empId", authMiddleware, getEmployeeAttendance);

export default router;
