import User from "../models/user-model.js";
import { UserService } from "../services/user-service.js";


const userService=new UserService();

const createUser=async(req,res)=>{
    try {
        const response=await userService.createUser(req.body);
        return res.status(200).json({
            data:response,
            Message:"User Created Successfully",
            scuccess:true,
            error:{},
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            Message:"User can not Created Successfully",
            cuccess:false,
            error:{error},
        })
    }
}


const login=async(req,res)=>{
   try {
    const token=await userService.authenticateUser(req.body.email,req.body.password);
    return res.status(200).json({
        data:token,
        message:"Successfully logged in",
        success:true,
        error:{}
    })


   } catch (error) {
    return res.status(200).json({
        message:"error occured",
    })
   }

}

const readUser=async(req,res)=>{
    try {
        const response=await userService.readUser(req.query.userId);
        return res.status(200).json({
            data:response,
            Message:"User fetched Successfully",
            scuccess:true,
            error:{},
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            Message:"Tweet can not fetched Successfully",
            cuccess:false,
            error:{error},
        })
    }
}


const removeUser=async(req,res)=>{
    try {
        const response=await userService.removeUser(req.query.userId);
        return res.status(200).json({
            data:response,
            Message:"User removed Successfully",
            scuccess:true,
            error:{},
        })
    } catch (error) {
        return res.status(500).json({
            data:{},
            Message:"User can not deleted Successfully",
            cuccess:false,
            error:{error},
        })
    }
}

export {createUser,readUser,removeUser,login}