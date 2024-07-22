import express from "express";
import createTweet from "../../controller/tweet-controller.js";

const router=express.Router();


router.post('/tweet',createTweet);

export default router