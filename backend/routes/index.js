import express from "express";
import {getAllUser, Register, Login} from "../controllers/users.js"
import { verifyToken } from "../middleware/VerifyToken.js";
const router = express.Router();

router.get('/users', getAllUser);
router.post('/users', Register);
router.post('/login', Login);

export default router;