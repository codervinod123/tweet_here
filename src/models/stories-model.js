import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Story = mongoose.model("Story", storySchema);
export default Story;
