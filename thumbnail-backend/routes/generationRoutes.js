import express from "express";
import { getMyGenerations } from "../controllers/generationController.js";
import authMiddleware from "../middleware/auth.js";

const router = express.Router();

router.get("/my", authMiddleware, getMyGenerations);

export default router;
