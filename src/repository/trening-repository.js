import { populate } from "dotenv";
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
      let response = await Hashtag.aggregate([
        {
          $addFields: {
            tweetCount: { $size: "$tweets" },
          },
        },
        {
          $sort: { tweetCount: -1 },
        },
        {
            $lookup: {
                from: "tweets", 
                localField: "tweets", 
                foreignField: "_id", 
                as: "tweetDetails", 
            },
        },
      ]).limit(pageNo * 5);
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }

}








// {
//   $lookup: {
//       from: "tweets", 
//       localField: "tweets", 
//       foreignField: "_id", 
//       as: "tweetDetails", 
//   },
// },