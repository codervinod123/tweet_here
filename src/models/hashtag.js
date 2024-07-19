const mongoose=require('mongoose');

const hashtagSchema=new mongoose.Schema({
     content:{
        type:Array,
        required:true
     }
},{timestamps:true});

const Hashtag=mongoose.model('Hastag',hashtagSchema);
module.exports=Hashtag