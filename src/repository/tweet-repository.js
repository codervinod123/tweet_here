import { Tweet } from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getBulkTweet(pageNo, userid) {
    try {
      const response = await this.model
        .find({ author: { $ne: userid } })
        .sort({ createdAt: -1 })
        .limit(pageNo * 10)
        .populate({path: "author"});
      return response;
    } catch (error) {
      console.log("Error occured while fetching entry xxxxxxxx");
      throw { error };
    }
  }



}
