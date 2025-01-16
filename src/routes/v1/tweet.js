import express from "express";
import {
  createTweet,
  like,
  readTweet,
  deleteTweet,
  createComment,
  getComments,
  getTrendingTweet
} from "../../controller/index.js";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

const tweetRouter = express.Router();

tweetRouter.post("/tweet", authenticateUser, multerUpload, createTweet);
tweetRouter.get("/",authenticateUser, readTweet);
tweetRouter.delete("/tweet", deleteTweet);
tweetRouter.get("/trendintweet", getTrendingTweet);
tweetRouter.post("/like", authenticateUser, like);
tweetRouter.post("/comment", authenticateUser, createComment);
tweetRouter.get("/comment", getComments);

export default tweetRouter;
