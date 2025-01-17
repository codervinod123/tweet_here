import express from "express";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authValidator } from "../../middlewares/authValidator-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

const userRouter = express.Router();
import {
  createUser,
  loginUser,
  readUser,
  removeUser,
  currentLoginUser,
  getUserByEmail,
  updateProfilePic,
  follow,
  searchUser,
  getFriends
} from "../../controller/index.js";

// Endpoints related to User welcomeMailSender
userRouter.post("/signup", createUser);
userRouter.post("/signin", authValidator, loginUser);
userRouter.get("/", authenticateUser, readUser);
userRouter.get("/currentloginuser", authenticateUser, currentLoginUser);
userRouter.delete("/:userId", removeUser);
userRouter.get("/friends", getFriends);


userRouter.post(
  "/updateprofile",
  authenticateUser,
  multerUpload,
  updateProfilePic,
);

userRouter.post("/follow", authenticateUser, follow);

userRouter.get("/search", searchUser);

// below is not is use
userRouter.post("/login/email", getUserByEmail);

export default userRouter;
