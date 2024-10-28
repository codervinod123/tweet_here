import express from "express";

import userRouter from "./users.js";
import tweetRouter from "./tweet.js";
import trendingRouter from "./trending.js";
import storyRouter from "./story.js";

const router = express.Router();

router.use("/user", userRouter);
router.use("/tweet", tweetRouter);
router.use("/trending", trendingRouter);
router.use("/story", storyRouter);

export default router;
