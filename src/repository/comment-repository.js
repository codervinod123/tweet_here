import Comment from "../models/comment-model.js";


export class CommentRepository{
      
    async createComment(data){
        try {
            const response=await Comment.create(data);
            return response;
        } catch (error) {
            console.log('Error has occured while creating comment');
            throw {error};
        }
    }

} 