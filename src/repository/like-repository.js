import { CrudRepository } from "./crud-repository.js";
import Like from "../models/like-model.js";

export class LikeRepository extends CrudRepository {
  constructor() {
    super(Like);
  }

  async findUserAndLikeable(data) {
    try {
      const response = await Like.findOne(data);
      return response;
    } catch (error) {
      console.log("Error has occured while getting like", error);
    }
  }
}
