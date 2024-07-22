import { LikeRepository, TweetRepository } from "../repository/index.js";

export class LikeService{

     constructor(){
        this.likeRepository=new LikeRepository();
        this.tweetRepository=new TweetRepository();  
     }
     
    async toggleModel(modelName,modelId,userId){
        
        try {
            if(modelName=='Tweet'){
                var likable=await this.tweetRepository.readTweet(modelId);
            }
        
         const isExist=await this.likeRepository.findUserAndLikeable({
            onModel:modelName,
            likeable:modelId,
            user:userId,
         })

         if(isExist){
             await likable.likes.pull(isExist.id); 
             likable.save();
             await this.likeRepository.destroy(isExist.id);
             
         }else {
            const newLike=await this.likeRepository.create({
                onModel:modelName,
                likeable:modelId,
                user:userId,
            })
            await likable.likes.push(newLike);
            likable.save();
         }


        } catch (error) {
            console.log('Error occured Hua hai',error);
        }
           
    }


}
