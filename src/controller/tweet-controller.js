import { TweetService } from "../services/tweet-service.js";

const tweetService=new TweetService(); 

const createTweet=async(req,res)=>{
    try {
        const response=await tweetService.createTweet(req.body);
        return res.status(200).json({
            data:response,
            cuccess:true,
            error:{},
            Message:"Tweet has Created Successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            data:{},
            cuccess:false,
            error:{error},
            Message:"Tweet can not Created Successfully"
        })
    }
}

export default createTweet;