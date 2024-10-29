import express from "express";
import { addStories, readStory, clearStory } from "../../controller/index.js";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

// #cron
import cron from "node-cron";

const storyRouter = express.Router();

storyRouter.post("/", authenticateUser, multerUpload, addStories);
storyRouter.get("/", readStory);
storyRouter.delete("/", clearStory);


cron.schedule('*/30 * * * *', async () => {
   await clearStory();
});
  


export default storyRouter;
