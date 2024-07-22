import mongoose from "mongoose";

const likeSchems=new mongoose.Schema({
     
    onModel:{
        type:String,
        enum:['Tweet','Comment'],
        required:true
    },
    likeable:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        refPath:'onModel',
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }

},{timestamps:true});

const Like=mongoose.model('Like',likeSchems);
export default Like;