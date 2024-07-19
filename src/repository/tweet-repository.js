const Tweet=require('../models/tweet');
const Hashtag=require('../models/hashtag');

class TweetRepository{
     async createTweet(data){
        try {
             
             const content=data.content;
             let tags=content.match(/#[a-z0-9_]+/g);
             tags=tags.map((s)=>s.substring(1));
             await Hashtag.create({content:tags});

             const tweet=await Tweet.create({...data,hashtag:tags});
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