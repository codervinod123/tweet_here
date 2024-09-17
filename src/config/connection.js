import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

const createConnection = async () => {
  try {
    await mongoose
      .connect("mongodb+srv://vinodpr737947:STpNBZWqKMM01oKJ@cluster0.ocnn6.mongodb.net/dummy_tweet_here")
      .then(() => console.log(`Connected! to the database ${MONGO_URL} `));
  } catch (error) {
    console.log("Error has occured", error);
  }
};

export default createConnection;
