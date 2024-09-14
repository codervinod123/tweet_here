import { UserRepository } from "../repository/index.js";

export class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const response = await this.userRepository.createEntry(data);
      return response;
    } catch (error) {
      console.log("Error has  occured while creating user");
      throw { error };
    }
  }

  async readUser(userId) {
    try {
      const response = await this.userRepository.readEntry(userId);
      return response;
    } catch (error) {
      console.log("Error has  occured while deleting user");
      throw { error };
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
      throw { error };
    }
  }

  async authenticateUser(data) {
    try {
      // checking a user is present in db or not
      const user = await this.getByEmail(data.email);
      if (!user) {
        console.log("Wrong email id");
        throw {};
      }

      // is user is present then will check for
      if (!user.comparePassword(data.password)) {
        console.log("Password Mismatch");
        throw {};
      }

      const token = user.genJWT();
      user.verifyToken(token);
      return token;
    } catch (error) {
      console.log("Error has occured while authenticating user");
      throw { error };
    }
  }
}
