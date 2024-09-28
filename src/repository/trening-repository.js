import { Hashtag } from "../models/index.js";

export class TrendingRepository {
  async searchTrending(trend) {
    try {
      let response = await Hashtag.find({
        hashtag: { $regex: trend },
      }).populate({ path: "tweets" });
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }

  async findAllTrending() {
    try {
      let response = await Hashtag.find().populate({ path: "tweets" });
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }
}
