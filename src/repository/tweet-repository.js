import Tweet from "../models/tweet-model.js";
import { CrudRepository } from "./crud-repository.js";


export class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
}


