import { TweetService } from "../services/tweet-service.js";
import { uploadOnCloudinart } from "../utils/upload-cloudinary.js";

const tweetService=new TweetService(); 



const createTweet=async(req,res)=>{
    try {
        const imageURI=await uploadOnCloudinart(req.file.path);
        req.body={...req.body,media:imageURI.url}
       
        const response=await tweetService.createTweet(req.body);
        return res.status(200).json({
            data:response,
            Message:"Tweet has Created Successfully",
            success:true,
            error:{},     
        })

   } catch (error) {
      console.log(error)
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