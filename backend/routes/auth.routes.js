import express from "express";
import upload from "../middleware/upload.middleware.js";
import { registerUser, loginUser, getUserProfile } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router();
router.post("/register", upload.single("avatar"), registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);
export default router;