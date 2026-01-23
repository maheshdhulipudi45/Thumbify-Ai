import mongoose from "mongoose";

const generationSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    thumbnailUrl: {
      type: String,
      required: true,
    },
    prompt: String,
    style: String,
  },
  { timestamps: true }
);

export default mongoose.model("Generation", generationSchema);
