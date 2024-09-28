import { CrudRepository } from "./crud-repository.js";
import { Comment } from "../models/index.js";

export class CommentRepository extends CrudRepository {
  constructor() {
    super(Comment);
  }
}
