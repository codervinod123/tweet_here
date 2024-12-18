import { User } from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
  constructor() {
    super(User);
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
}
