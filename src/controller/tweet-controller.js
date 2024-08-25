import { TweetService } from "../services/tweet-service.js";
import { uploadCloudinary } from "../utils/cloudinaryConfig.js";

const tweetService=new TweetService(); 

const createTweet=async(req,res)=>{
    try {
        

              
         const x=await uploadCloudinary();
         console.log("RES",x.url);
         req.body={...req.body,media:x.url}
       

        const response=await tweetService.createTweet(req.body);
        return res.status(200).json({
            data:response,
            Message:"Tweet has Created Successfully",
            success:true,
            error:{},     
        })

   } catch (error) {
        return res.status(500).json({
            data:{},
            Message:"Tweet can not Created Successfully",
            cuccess:false,
            error:{error},
        })
    }
}


const readTweet=async(req,res)=>{
    try {

        const response=await tweetService.readTweet(req.query.tweetId);
        return res.status(200).json({
            data:response,
            Message:"Tweet has fetched Successfully",
            success:true,
            error:{},     
        })

   } catch (error) {
        return res.status(500).json({
            data:{},
            Message:"Tweet can not fetched Successfully",
            cuccess:false,
            error:{error},
        })
    }
}

export { createTweet,readTweet };