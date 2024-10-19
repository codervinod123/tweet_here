import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/serverConfig.js";


const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    profilePic: {
      type: String,
    },
    bio: {
      type: String,
    },
    location: {
      type: String,
    },
    followersList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    followingList: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true },
);

// comparing the encrypted passsword with user's entered password
userSchema.methods.comparePassword = function compare(password) {
  const response = bcrypt.compareSync(password, this.password);
  return response;
};

// generating the jwt token for sendint it with subsequent request
userSchema.methods.genJWT = function genJwt() {
  return jwt.sign({ id: this.id, email: this.email }, JWT_SECRET, {
    expiresIn: "24h",
  });
};

// verifying token with secret key
userSchema.methods.verifyToken = function verify(token) {
  const response = jwt.verify(token, JWT_SECRET);
  return response;
};

//encrypting the password before saving to the database
userSchema.pre("save", function (next) {
  //eslint-disable-next-line
  const user = this;
  const SALT = bcrypt.genSaltSync(10);
  const encryptedPass = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPass;
  next();
});

const User = mongoose.model("User", userSchema);
export default User;
