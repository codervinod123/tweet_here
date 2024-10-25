import { CrudRepository } from "./crud-repository.js";
import { Comment } from "../models/index.js";

export class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }

  async getComments(postId, pageNo) {
    try {
      if (!postId) {
        const response = await Comment.find();
        return response;
      }
      if (pageNo == 1) {
        const response = await Comment.find({ commentable: postId }).limit(
          pageNo * 1,
        );
        return response;
      } else {
        const response = await Comment.find({ commentable: postId }).limit(
          pageNo * 3,
        );
        return response;
      }
    } catch (error) {
      console.log("Error occured while fetching entry xxxxxxxx");
      throw error;
    }
  }
}
