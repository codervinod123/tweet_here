import express from "express";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authValidator } from "../../middlewares/authValidator-middleware.js";
import welcomeMailSender from "../../middlewares/email-sender-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

const userRouter = express.Router();
import {
  createUser,
  loginUser,
  readUser,
  removeUser,
  getUserByEmail,
  updateProfilePic,
  follow,
} from "../../controller/index.js";

// Endpoints related to User welcomeMailSender
userRouter.post("/signup", welcomeMailSender, createUser);
userRouter.post("/signin", authValidator, loginUser);
userRouter.get("/", readUser);
userRouter.delete("/:userId", removeUser);
userRouter.post("/updateprofile", multerUpload, updateProfilePic);
userRouter.post("/follow", authenticateUser, follow);
// below is not is use
userRouter.post("/login/email", getUserByEmail);

export default userRouter;
