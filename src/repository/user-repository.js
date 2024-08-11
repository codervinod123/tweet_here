import User from "../models/user-model.js";
import { CrudRepository } from "./crud-repository.js";

export class UserRepository extends CrudRepository {
  constructor() {
    super(User);
  }
  async getByEmail(email) {
    try {
      const user = await User.findOne({ email: email })
      return user;
    } catch (error) {
      console.log("Error has occured while finding user");
      throw { error };
    }
  }
}

