import express from "express";
import {
  createUser,
  loginUser,
  readUser,
  removeUser,
  getUserByEmail,
  updateProfilePic,
  createTweet,
  like,
  readTweet,
  deleteTweet,
  createComment,
  searchTrending,
  allTrending,
} from "../../controller/index.js";

// multer uploaders
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authValidator } from "../../middlewares/authValidator-middleware.js";

// email senders
import welcomeMailSender from "../../middlewares/email-sender-middleware.js";

const router = express.Router();

// Endpoints related to User
router.post("/user", authValidator, welcomeMailSender, createUser);
router.post("/login", authValidator, loginUser);
router.get("/user", readUser);
router.delete("/user", removeUser);
router.post("/login/email", getUserByEmail);
router.post("/updateprofile", multerUpload, updateProfilePic);


// Endpoints related to Tweets
//router.post('/tweet' , authenticateUser , multerUpload , createTweet);
router.post("/tweet", multerUpload, createTweet);
router.get("/tweet", readTweet);
router.delete("/tweet", deleteTweet);

// Endpoints related to Likes
router.post("/like", like);

// Endpoints related to comment
router.post("/comment", createComment);


// Endpoints related to search trending posts based upon #tag
router.get("/trend", searchTrending);
router.get("/trending", allTrending);

// trying to mimic image upload
// router.post('/image-upload',imageUpload);

export default router;
