import { Tweet } from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class TweetRepository extends CrudRepository {
  constructor() {
    super(Tweet);
  }
}
