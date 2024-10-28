import express from "express";
import { addStories, readStory } from "../../controller/index.js";
import { multerUpload } from "../../middlewares/multer-middleware.js";
import { authenticateUser } from "../../middlewares/authenticate-middleware.js";

const storyRouter = express.Router();

storyRouter.post("/", authenticateUser, multerUpload, addStories);
storyRouter.get("/", readStory);

export default storyRouter;
