import { UserRepository } from "../repository/index.js";

export class UserService {
   
    constructor(){
        this.userRepository=new UserRepository();
    }

    async createUser(data){
        try {
            const response=await this.userRepository.createEntry(data);
            return response;
       } catch (error) {
           console.log('Error has occured while creating User',error);
           throw {error};
       }
    }

    async readUser(userId){
        try {
            const response=await this.userRepository.readEntry(userId);
            return response;
       } catch (error) {
           console.log('Error has occured while fetching User',error);
           throw {error};
       }
    }

    async getByEmail(email){
        try {
            const response=await this.userRepository.getByEmail(email);
            return response;
       } catch (error) {
           console.log('Error has occured while fetching User',error);
           throw {error};
       }
    }

    async authenticateUser(email,password){
        try {
             const user=await this.getByEmail(email);
             if(!user){
                return res.status(500).json({
                    message:"Cant find",
                })
            }
            if(!user.comparePassword(password)){
                return res.status(500).json({
                message:"Password mismatch 78987"
              })
            }
           const token= user.genJWT();
           return token;

        } catch (error) {
           console.log('Error has occured while fetching User',error);
           throw {error};
        }
    }

    async removeUser(userId){
        try {
            const response=await this.userRepository.removeEntry(userId);
            return response;
       } catch (error) {
           console.log('Error has occured while removing User',error);
           throw {error};
       }
    }

}