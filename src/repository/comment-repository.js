import { CrudRepository } from "./crud-repository.js";
import Comment from "../models/comment-model.js";


export class CommentRepository extends CrudRepository {
 
  constructor() {
    super(Comment);
  }

} 