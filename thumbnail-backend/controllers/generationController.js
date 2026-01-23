import Generation from "../models/Generation.js";

export const getMyGenerations = async (req, res) => {
  try {
    const generations = await Generation.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.json(generations);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch history" });
  }
};
