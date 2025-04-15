import express from 'express';
import { registerAdmin ,loginAdmin,logoutAdmin} from '../controllers/admin.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router();

// Admin registration route
router.post('/register', registerAdmin);

router.post("/login", loginAdmin);

router.get("/logout", authMiddleware, logoutAdmin);

export default router;
