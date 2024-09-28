import {User} from "../models/index.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }

  async getByEmail(email) {
    try {
      const user = await User.findOne({ email: email });
      return user;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }

  async updateProfilePic(userId, profilePic, name, bio, location) {
    try {
      await User.findByIdAndUpdate(userId, {
        profilePic: profilePic,
        name: name,
        bio: bio,
        location: location,
      });
      return true;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }
}
