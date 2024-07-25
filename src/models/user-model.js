import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type : String,
        required : true
    }
},{timestamps:true});


userSchema.methods.comparePassword=function compare(password){
      const x= bcrypt.compareSync(password,this.password);
      return x;
}

userSchema.methods.genJWT=function genJwt(){
    return jwt.sign({id:this.id,email:this.email}, 'twitter_app' ,{expiresIn: 3600});
}


userSchema.methods.verifyToken=function verify(token){
    const response = jwt.verify(token,'twitter_app');
    return response;
}


  

userSchema.pre('save',function(next){
    const user=this;
    const SALT=bcrypt.genSaltSync(10) ;
    const encryptedPass=bcrypt.hashSync(user.password,SALT);
    user.password=encryptedPass;
   next();
})

const User=mongoose.model('User',userSchema);
export default User;