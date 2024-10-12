import { Tweet } from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }

  async getBulkTweet(entryId) {
    try {
      if (!entryId) {
        const response = await this.model.find();
        return response;
      }
      const response = await this.model.findById(entryId);
      return response;
    } catch (error) {
      console.log("Error occured while fetching entry xxxxxxxx");
      throw { error };
    }
  }
}
