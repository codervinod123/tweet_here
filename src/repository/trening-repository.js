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

  async findAllTrending(pageNo) {
    try {
      let response = await Hashtag.find()
        .sort({ createdAt: -1 })
        .limit(pageNo * 5)
        .populate({ path: "tweets" });
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }
}
