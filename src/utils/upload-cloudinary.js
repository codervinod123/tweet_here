import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { CLOUD_NAME, API_KEY, API_SECRET } from "../config/serverConfig.js";

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET,
});

const uploadOnCloudinary = async (localFilePath, usersProfilePics) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: `tweet_here/${usersProfilePics}`,
    });
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error from Cloudinary", error);
    return null;
  }
};

export { uploadOnCloudinary };
