import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: 'prajapatiautomobiles', 
  api_key: '686826227739641', 
  api_secret: 'oNtMNL6k4XGDOgjO--GLIUuTE3c'
});

const uploadOnCloudinary=async(localFilePath)=>{
  try {
    if (!localFilePath) return null;
         
    const response=await cloudinary.uploader.upload( 
      localFilePath,{
        resource_type:'auto',
        folder:'tweet_here/tweet-media',
      }
    )
    fs.unlinkSync(localFilePath);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath);
    console.log("Error from Cloudinary",error);
    return null;
  }
}

export {uploadOnCloudinary};



