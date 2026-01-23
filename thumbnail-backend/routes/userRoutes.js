import express from "express";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "User profile accessed ✅",
    userId: req.userId,
  });
});

export default router;
