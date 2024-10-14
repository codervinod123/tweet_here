import express from "express";
import {
  createTweet,
  like,
  readTweet,
  deleteTweet,
  createComment,
} from "../../controller/index.js";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

const tweetRouter = express.Router();

tweetRouter.post("/tweet", multerUpload, createTweet);
tweetRouter.get("/", readTweet);
tweetRouter.delete("/tweet", deleteTweet);
tweetRouter.post("/like", authenticateUser, like);
tweetRouter.post("/comment", authenticateUser, createComment);

export default tweetRouter;
