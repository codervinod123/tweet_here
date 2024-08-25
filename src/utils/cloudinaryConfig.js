import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import path from "path";


 cloudinary.config({ 
    cloud_name: 'prajapatiautomobiles', 
    api_key: '686826227739641', 
    api_secret: 'oNtMNL6k4XGDOgjO--GLIUuTE3c'
});




const uploadCloudinary=async()=>{
   console.log("Hello from My side");
   const localFilePath = path.resolve('src/utils/image.png');
   try {
    // in case if there is no file
     if(!localFilePath){
       return null;
     }

   
     const response=await cloudinary.uploader.upload(
      localFilePath,
        {resource_type:"auto"}
     )
   //   console.log("File has been uploaded successfully",response);
     return response;

   } catch (error) {
      console.log("Gadbad from another one",error);
   }
}


export {uploadCloudinary};