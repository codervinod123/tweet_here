import { LikeService } from "../services/like-service.js";

const likeService=new LikeService();

const like=async(req,res)=>{
    try {                      
         const response=await likeService.toggleModel(req.query.modelName,req.query.modelId,req.body.userId)
         return res.status(200).json({
            data:response,
            scuccess:true,
            error:{},
            Message:"Item Liked Successfully"
        })
    } catch (error) {
        return res.status(500).json({
            data:null,
            scuccess:false,
            error:{error},
            Message:"Item can not Like Successfully"
        })
    }
}

export default like