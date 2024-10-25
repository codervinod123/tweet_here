import mongoose from "mongoose";
import { MONGO_URL } from "./serverConfig.js";

const createConnection = async () => {
  try {
    await mongoose
      .connect(MONGO_URL)
      .then(() => console.log(`Connected! to the database`));
  } catch (error) {
    console.log("Error has occured", error);
  }
};

export default createConnection;
