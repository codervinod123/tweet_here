import mongoose from "mongoose";
import Comment from "../models/comment-model.js";

export class CommentRepository{
      
    async createComment(data){
        try {
            const reponse=await Comment.create(data);
        } catch (error) {
            console.log('Error has occured while creating comment');
            throw {error};
        }
    }

} 