import mongoose, { mongo } from "mongoose";
import bcrypt from "bcrypt"

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


const saltRounds = 10;
const someOtherPlaintextPassword = 'not_bacon';


userSchema.pre('save',function(next){
    const user=this;
    const SALT=bcrypt.genSaltSync(10) ;
    const encryptedPass=bcrypt.hashSync(user.password,SALT);
    console.log(encryptedPass);
    user.password=encryptedPass;
   next();

})

const User=mongoose.model('User',userSchema);
export default User;