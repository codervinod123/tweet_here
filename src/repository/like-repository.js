import { CrudRepository } from "./crud-repository.js";
import Like from "../models/like-model.js";

export class LikeRepository{
   

     async create(data){
        try {
             console.log(data);
             const response=await Like.create(data);
             return response;
        } catch (error) {
             console.log("Error has occured while creating entry");
             throw {error};
        }
       }

     async findUserAndLikeable(data){
        try {
             const response=await Like.findOne(data);
             return response;
        } catch (error) {
              console.log('Error has occured while getting like',error);
        }
     }

     async destroy(likeId){
          try {
              const response=await Like.findByIdAndDelete(likeId); 
              return response;
          } catch (error) {
             console.log('Error has occured while getting like',error);
          }
     }
}

