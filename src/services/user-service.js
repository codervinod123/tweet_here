import { UserRepository } from "../repository/index.js";
import { ClientError } from "../errorhandlers/client-error.js";
import { StatusCodes } from "http-status-codes";
import { MongoError } from "../errorhandlers/mongo-error.js";



export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(email, password, name, profilePic) {
    try {
      const userData = { email, password, name, profilePic };
      const user = await this.userRepository.createUser(userData);
      const token = user.genJWT();
      user.verifyToken(token);
      return token;
    } catch (error) {
      
      if(error.name == "MongoServerError"){
          const mongoError=new MongoError(error);
          throw mongoError;  
      }
      if(error.name == "ValidationError"){
        const clientError=new ClientError(
          error.name,
          error.message,
          StatusCodes.BAD_REQUEST,
          error._message
        );
        throw clientError;  
      }

      throw error;
    }
  }

  async authenticateUser(email, password) {
    try {
      // checking a user is present in db or not
      const res = await this.getByEmail(email);
      if (!res) {
         const clientError=new ClientError(
          "AttributeNotFound",
          "Invalid Email id send",
          StatusCodes.NOT_FOUND,
          "Please check your Email id , we have't this email in our record"
         );
         throw clientError;
      }

      // is user is present then will check for
      if (!res.comparePassword(password)) {
        const clientError=new ClientError(
          "PassworNotMatched",
          "Invalid Password",
          StatusCodes.NOT_FOUND,
          "Please check your Password , we have't this pass associated with any Email"
         );
         throw clientError;
      }

      const token = res.genJWT();
      res.verifyToken(token);

      const user={
        name: res.name,
        email: res.email,
        bio: res.bio,
        createdAt: res.createdAt,
        followerList: res.followersList,
        followingList: res.followingList,
        location: res.location,
        profilePic: res.profilePic,
        _id: res._id,
      }
      
      return {user, token};
    } catch (error) {
      throw error;
    }
  }


  async updateUserProfilepic(userId, profilePic, name, bio, location) {
    try {
      const response = await this.userRepository.updateProfilePic(
        userId,
        profilePic,
        name,
        bio,
        location,
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async readUser(userId) {
    try {
      const response = await this.userRepository.readEntry(userId);
      return response;
    } catch (error) {
      console.log("ERRROR ###3", error.reason);
      throw error;
    }
  }


  async getByEmail(userEmail) {
    try {
      const response = await this.userRepository.getByEmail(userEmail);
      return response;
    } catch (error) {
      console.log("Error has  occured while getting user via email");
      throw { error };
    }
  }

  async removeUser(userId) {
    try {
      await this.userRepository.removeEntry(userId);
      return true;
    } catch (error) {
      console.log("Error has  occured while deleting user");
      throw error;
    }
  }

  async follow(followerId, followingId) {
    try {
      const response = await this.userRepository.follow(
        followerId,
        followingId,
      );
      return response;
    } catch (error) {
      console.log("Error has  occured while deleting user");
      throw { error };
    }
  }

}
