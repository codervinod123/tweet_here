import { v2 as cloudinary } from "cloudinary";
import path from 'path';
import fs from 'fs';
import { uploadCloudinary } from "../utils/cloudinaryConfig.js";

// cloudinary.config({ 
//     cloud_name: 'prajapatiautomobiles', 
//     api_key: '686826227739641', 
//     api_secret: 'oNtMNL6k4XGDOgjO--GLIUuTE3c'
// });

// Resolve the absolute path of the image
const imgPath = path.resolve('src/repository/image.png');

async function imageUpload(req, res) {
    try {
       
        // Upload the image to Cloudinary
      //   const result = await cloudinary.uploader.upload(imgPath);
      //   console.log(result);

      const x=await uploadCloudinary();
      console.log("RES",x);

        return res.json({
            Message: "OKK",
        });
    } catch (error) {
        console.log("Error has occurred", error);

        return res.json({
            Message: "Error occurred during image upload",
            err: error.message,
        });
    }
}

export default imageUpload;
