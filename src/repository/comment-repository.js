import { CrudRepository } from "./crud-repository.js";
import { Comment } from "../models/index.js";

export class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  
  async getComments(postId) {
    try {
      if (!postId) {
        const response = await Comment.find();
        return response;
      }
      const response = await Comment.find({commentable:postId})
      return response;
    } catch (error) {
      console.log("Error occured while fetching entry xxxxxxxx");
      throw error;
    }
  }

}
