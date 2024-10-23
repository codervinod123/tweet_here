import Tweet from "../models/tweet-model.js";
import Like from "../models/like-model.js";
import Comment from "../models/comment-model.js";
import { ValidationError } from "../errorhandlers/validationError.js";
import { TweetRepository, HashtagRepository } from "../repository/index.js";
import { ClientError } from "../errorhandlers/client-error.js";
import { StatusCodes } from "http-status-codes";

export class TweetService {
 
  constructor() {
    this.tweetRepository = new TweetRepository();
    this.hashtagRepository = new HashtagRepository();
  }

  async createTweet(data) {
    try {
      const content = data.content;
      if(!content) {
         const clientError=new ClientError(
          "ContentNotProvided",
          "Content Not Provided",
          StatusCodes.BAD_REQUEST,
          "Please provide atleast Content or media"
         );
         throw clientError;
      }

      let tags;
      if(content){
        tags=content.match(/#[a-zA-Z0-9_]+/g);
      }
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
      return tweet;
    } catch (error) {
      if(error.name == "ValidationError"){
        const validationError=new ValidationError(error);
        throw validationError;
      }
      throw error;
    }
  }

  async readTweet(tweetId, pageNo) {
    try {
      if (!tweetId) {
        const response = await this.tweetRepository.getBulkTweet(pageNo);
        return response;
      }
      const response = await Tweet.findById(tweetId);
      return response;
    } catch (error) {
      console.log("Error has occured while Getting tweet", error);
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
