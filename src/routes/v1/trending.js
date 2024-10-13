import express from "express";
import { searchTrending, allTrending } from "../../controller/index.js";

const trendingRouter = express.Router();

trendingRouter.get("/", searchTrending);
trendingRouter.get("/bulk", allTrending);

export default trendingRouter;
