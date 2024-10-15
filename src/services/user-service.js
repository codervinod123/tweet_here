import { UserRepository } from "../repository/index.js";

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
      throw {error};
    }
  }

  async authenticateUser(email, password) {
    try {
      // checking a user is present in db or not
      const user = await this.getByEmail(email);
      if (!user) {
        console.log("Wrong email id");
        throw {};
      }

      // is user is present then will check for
      if (!user.comparePassword(password)) {
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
      console.log("Error has  occured while updating ProfilePic");
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
