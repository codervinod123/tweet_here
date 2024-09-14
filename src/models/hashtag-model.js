import mongoose from "mongoose";

const hashtagSchema=new mongoose.Schema({
  hashtag:{
    type:String,
    required:true
  },
  tweets:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:'Tweet'
    }
  ]
},{timestamps:true});

const Hashtag=mongoose.model('Hastag',hashtagSchema);
export default Hashtag;