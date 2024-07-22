import { UserRepository } from "../repository/user-repository.js";

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