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

 
    async removeUser(userId){
        try {
            const response=await this.userRepository.removeEntry(userId);
            return response;
       } catch (error) {
           console.log('Error has occured while removing User',error);
           throw {error};
       }
    }

    async authenticateUser(data){
        try {
             const user=await this.userRepository.getByEmail(data.email);
             if(!user){
                 throw {error:"User is not available in the syatem"};
             }
             if(!user.comparePassword(data.password)){
                throw {error:"Given passwowrd Mismatch"};
             }

             const token=user.genJWT()
             return token;
        } catch (error) {
            console.log('Error occured during logging into the system');
            throw {error};
        }
    }

}