import { User } from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getUser(userid) {
    try {
      const response = await User.find({ _id: { $ne: userid } })
      return response;
    } catch (error) {
      throw error;
    }
  }

  async currentLoginUser(userid) {
    try {
      const response = await User.findById(userid);
      return response;
    } catch (error) {
      throw error;
    }
  }


  async getLoginUser(userid) {
    try {
      const response = await User.findById(userid);
      return response;
    } catch (error) {
      throw error;
    }
  }


  async createUser(data) {
    try {
      const response = await User.create(data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async searchUser(searchText) {
    try {
      if (searchText) {
        const response = await User.find({
          name: { $regex: new RegExp("^" + searchText.toLowerCase(), "i") },
        });
        return response;
      }
      const response = await User.find(searchText);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ email: email }).select("+password");
      return user;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw error;
    }
  }

  async updateProfilePic(userId, profilePic, name, bio, location) {
    try {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          profilePic: profilePic,
          name: name,
          bio: bio,
          location: location,
        },
        { new: true },
      );
      return user;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }

  async follow(followerId, followingId) {
    try {
      await User.updateOne(
        { _id: followerId },
        { $addToSet: { followingList: followingId } },
      );
      await User.updateOne(
        { _id: followingId },
        { $addToSet: { followersList: followerId } },
      );
      return true;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }

  async getFriends(id) {
    try {          
      const  response = await User.findById(id).select("followingList").populate([{ path: "followersList" }, { path: "followingList" }]);
      return response;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }

}
