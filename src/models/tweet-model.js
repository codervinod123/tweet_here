import mongoose from "mongoose";

const tweetScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      trim: true,
      maxlength: 225,
      minlength: 3,
    },
    media: {
      type: Array,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
      },
    ],
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true },
);

const Tweet = mongoose.model("Tweet", tweetScheme);
export default Tweet;
