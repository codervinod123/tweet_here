import express from "express";
import like from "../../controller/like-repository.js";
import createComment from "../../controller/comment-repository.js";

import {createTweet,readTweet,deleteTweet} from "../../controller/tweet-controller.js";
import { createUser,readUser,removeUser,loginUser,getUserByEmail } from "../../controller/user-controller.js";
import { searchTrending,allTrending } from "../../controller/trending-repository.js";

import authenticateUser from "../../middlewares/authenticate-middleware.js";

// import imageUpload from "../../repository/image-upload-repository.js";


// multer uploaders
import { Multerupload } from "../../middlewares/multer-middleware.js";

const router=express.Router();

// Endpoints related to Tweets
//router.post('/tweet', authenticateUser ,createTweet);
router.post('/tweet', Multerupload, createTweet);
router.get('/tweet',readTweet);
router.delete('/tweet',deleteTweet);

// Endpoints related to Likes
router.post('/like',like)

// Endpoints related to comment
router.post('/comment',createComment)

// Endpoints related to User
router.post('/user' ,createUser);
router.get('/user',readUser);
router.delete('/user',removeUser);
router.post('/login',loginUser);
router.post('/login/email',getUserByEmail)


// Endpoints related to search trending posts based upon #tag
router.get('/trend',searchTrending);
router.get('/trending',allTrending);


// trying to mimic image upload 
// router.post('/image-upload',imageUpload);


export default router