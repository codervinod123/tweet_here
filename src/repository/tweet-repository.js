const Tweet=require('../models/tweet');

class TweetRepository{
    
     async createTweet(data){
        try {
             const tweet=await Tweet.create(data);
             return tweet;
        } catch (error) {
             console.log('Error has occured while creating tweet',error);
            //  throw {error};
        }
     }

     async readTweet(tweetId){
        try {
             const tweet=await Tweet.findById(tweetId);
             return tweet;
        } catch (error) {
             console.log('Error has occured while creating tweet');
             throw {error};
        }
     }

}

module.exports=TweetRepository;