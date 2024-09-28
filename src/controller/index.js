import {like} from "./like-repository.js";
import { searchTrending, allTrending } from "./trending-repository.js";
import { createTweet, readTweet, deleteTweet } from "./tweet-controller.js";
import { createUser, readUser, removeUser, loginUser, getUserByEmail, updateProfilePic} from "./user-controller.js";
import {createComment} from "./comment-repository.js";

export {
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
}