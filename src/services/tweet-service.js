import { TweetRepository , HashtagRepository} from "../repository/index.js";

export class TweetService{

    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }
      
    async createTweet(data){
        try {
            console.log("Running the services")

             const content=data.content;
             let tags=content.match(/#[a-z0-9_]+/g);
             tags=tags.map((tag)=> tag.substring(1));
             const tweet=await this.tweetRepository.createTweet(data);
             let alreadyPresentTag=await this.hashtagRepository.findByName(tags)
             let presentTag=alreadyPresentTag.map((tag)=>tag.hashtag)
             
             let newTags=tags.filter((tag)=>!presentTag.includes(tag))
             
            newTags=newTags.map((tag)=>{
                return { hashtag:tag ,tweets: [tweet.id] }
             })

             const response=await this.hashtagRepository.createBulk(newTags);
             alreadyPresentTag.map((item)=>{
                  item.tweets.push(tweet.id);
                  item.save(); 
             })
            //  if(tags){
            //     tags=tags.map((s)=>s.substring(1));
            
            //     var idddddd=tags.map(async(tag)=>{
            //       const hashTag=await Hashtag.findOne({hashtag:tag});
            //         if(!hashTag){
            //           const htg=await Hashtag.create({hashtag:tag,tweets:IDX});
            //           return htg._id.toString();
            //       }
            //      })
            //  }
             return tweet; 

        } catch (error) {
            console.log('Error has occured while creating tweet',error);
        }
    }

}

