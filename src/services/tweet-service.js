import Tweet from "../models/tweet-model.js";
import Like from "../models/like-model.js";
import Comment from "../models/comment-model.js";

import { TweetRepository, HashtagRepository } from "../repository/index.js";

export class TweetService {
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async createTweet(data) {
    try {
      const content = data.content;
      let tags = content.match(/#[a-zA-Z0-9_]+/g);
      const tweet = await this.tweetRepository.createEntry(data);

      if (tags) {
        tags = tags.map((tag) => tag.substring(1));
        let alreadyPresentTag = await this.hashtagRepository.findByName(tags);
        let presentTag = alreadyPresentTag.map((tag) => tag.hashtag);
        let newTags = tags.filter((tag) => !presentTag.includes(tag));

        newTags = newTags.map((tag) => {
          return { hashtag: tag, tweets: [tweet.id] };
        });

        await this.hashtagRepository.createBulk(newTags);
        alreadyPresentTag.map((item) => {
          item.tweets.push(tweet.id);
          item.save();
        });
      }
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
      console.log("Error has occured while creating tweet", error);
      throw { error };
    }
  }

  async readTweet(tweetId) {
    try {
      if (!tweetId) {
        const response = await Tweet.find().populate('author').exec();
        // console.log(response);
        return response;
      }
      const response = await Tweet.findById(tweetId);
      //  console.log(response);
      return response;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
      throw { error };
    }
  }

  async deleteTweet(tweetId) {
    try {
      // deleting all the likes also from like table when user delete tweet
      await Like.deleteMany({ likeable: tweetId });
      // deleting all the comments also from comment table when user delete tweet
      await Comment.deleteMany({ commentable: tweetId });
      // deleting the tweet also from tweet table
      const response = await this.tweetRepository.removeEntry(tweetId);
      return response;
    } catch (error) {
      console.log("Error has occured while deleteing tweet", error);
      throw { error };
    }
  }
}
