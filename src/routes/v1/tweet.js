import express from "express";
import {
  createTweet,
  like,
  readTweet,
  deleteTweet,
  createComment
} from "../../controller/index.js";
import { multerUpload } from "../../middlewares/multer-middleware.js";

const tweetRouter=express.Router();

tweetRouter.post("/tweet", multerUpload, createTweet);
tweetRouter.get("/tweet", readTweet);
tweetRouter.delete("/tweet", deleteTweet);
tweetRouter.post("/like", like);
tweetRouter.post("/comment", createComment);


export default tweetRouter;
