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

const loginUser=async(req,res)=>{
    try {
        const response=await userService.authenticateUser(req.body);
        return res.status(200).json({
            data:response,
            Message:"User authenticated successfully",
            scuccess:true,
            error:{},
        })
    } catch (error) {
        return res.status(500).json({
            data:null,
            Message:"User can not authenticated successfully",
            scuccess:true,
            error: error,
        })
    }
}

export {createUser,readUser,removeUser,loginUser}