import { Router } from "express";
import * as authController from "../controllers/authController.js";
import authMiddleware from "../../middleware/authMiddleware.js";

const router = Router();

router.post("/register", authMiddleware, authController.register);
router.post("/login", authMiddleware, authController.login);
router.post("/logout", authMiddleware, authController.logout);
router.get("/perfil", authMiddleware, authController.getProfile);

export default router;
