import express from "express";
import like from "../../controller/like-repository.js";
import createComment from "../../controller/comment-repository.js";

import {createTweet,readTweet} from "../../controller/tweet-controller.js";
import { createUser,readUser,removeUser } from "../../controller/user-controller.js";
import { searchTrending } from "../../controller/trending-repository.js";

const router=express.Router();

// Endpoints related to Tweets
router.post('/tweet',createTweet);
router.get('/tweet',readTweet);

// Endpoints related to Likes
router.post('/like',like)

// Endpoints related to comment
router.post('/comment',createComment)

// Endpoints related to User
router.post('/user',createUser);
router.get('/user',readUser);
router.delete('/user',removeUser);

// Endpoints related to search trending posts based upon #tag
router.get('/trend',searchTrending);

export default router