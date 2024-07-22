import mongoose from "mongoose";

const commentSchema=new mongoose.Schema({

     onModel:{
       type:String,
       enum:['Tweet','Comment'],
       required:true,
     },
     commentable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel',
     },
      comment:{
        type:String,
        required:true
      },
      user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
      },
      comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Comment' 
        }
      ]

},{timestamps:true});

const Comment=mongoose.model('Comment',commentSchema);
export default Comment;