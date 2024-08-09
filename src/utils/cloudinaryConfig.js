import { v2 as cloudinary } from "cloudinary";
import fs from "fs";


 cloudinary.config({ 
    cloud_name: 'di6slwb8k', 
    api_key: '126556474311653', 
    api_secret: 'GcNTERmsrEX1w0TL2TJILF2otOk' // Click 'View Credentials' below to copy your API secret
});


const uploadCloudinary=async(localFilePath)=>{
   try {
    // in case if there is no file
     if(!localFilePath){
       return null;
     }
    //  upload the file on the cloudinary
     const response=await cloudinary.v2.uploader.upload(
        localFilePath,
        {resource_type:"auto"}
     )
     console.log("File has been uploaded successfully");
     return response;

   } catch (error) {
        fs.unlinkSync(localFilePath);
        return null;
   }
}


export {uploadCloudinary};