import { TrendingService } from "../services/index.js";

const trendingService = new TrendingService();

const searchTrending = async (req, res) => {
  try {
    const response = await trendingService.searchTrending(req.query.trend);
    return res.status(201).json({
      data: response,
      message: "Succcessfully fetched",
      success: true,
      error: {},
    });
  } catch (error) {
    return res.status(201).json({
      data: {},
      message: "Can not fetch Succcessfully",
      success: false,
      error: { error },
    });
  }
};

const allTrending = async (req, res) => {
  try {
    const pageNo = req.query.page;
    const trending = await trendingService.findAllTrending(pageNo);
    return res.status(201).json({
      data: trending,
      message: "Succcessfully fetched all the trending",
      success: true,
      error: {},
    });
  } catch (error) {
    return res.status(201).json({
      data: {},
      message: "Can not get all trends Succcessfully",
      success: false,
      error: { error },
    });
  }
};

export { searchTrending, allTrending };
