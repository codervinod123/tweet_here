import { like } from "./like-repository.js";
import { searchTrending, allTrending } from "./trending-repository.js";
import { createTweet, readTweet, deleteTweet } from "./tweet-controller.js";
import {
  createUser,
  readUser,
  removeUser,
  loginUser,
  getUserByEmail,
  updateProfilePic,
  follow,
  searchUser,
} from "./user-controller.js";
import { createComment, getComments } from "./comment-repository.js";

export {
  createUser,
  loginUser,
  searchUser,
  readUser,
  removeUser,
  getUserByEmail,
  updateProfilePic,
  createTweet,
  like,
  readTweet,
  deleteTweet,
  createComment,
  getComments,
  searchTrending,
  allTrending,
  follow,
};
