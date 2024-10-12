import { TrendingRepository } from "../repository/index.js";

export class TrendingService {
  constructor() {
    this.trendingRepo = new TrendingRepository();
  }

  async searchTrending(trend) {
    try {
      const response = await this.trendingRepo.searchTrending(trend);
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }

  async findAllTrending(pageNo) {
    try {
      const response = await this.trendingRepo.findAllTrending(pageNo);
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw { error };
    }
  }
}
