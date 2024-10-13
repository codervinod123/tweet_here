import { Hashtag } from "../models/index.js";

export class HashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
    }
  }

  async read(id) {
    try {
      const hashtag = await Hashtag.findOne(id);
      return hashtag;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
    }
  }

  async createBulk(data) {
    try {
      const hashtag = await Hashtag.insertMany(data);
      return hashtag;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
    }
  }

  async destroy(id) {
    try {
      const hashtag = await Hashtag.findByIdAndDelete(id);
      return hashtag;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
    }
  }

  async findByName(hashtagList) {
    try {
      const hashtag = await Hashtag.find({
        hashtag: hashtagList,
      });
      return hashtag;
    } catch (error) {
      console.log("Error has occured while creating tweet", error);
    }
  }
}
