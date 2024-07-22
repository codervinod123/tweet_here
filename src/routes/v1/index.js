import express from "express";
import createTweet from "../../controller/tweet-controller.js";
import like from "../../controller/like-repository.js";
import createComment from "../../controller/comment-repository.js";

const router=express.Router();


router.post('/tweet',createTweet);
router.post('/like',like)
router.post('/comment',createComment)

export default router