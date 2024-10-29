import { Story } from "../models/index.js";

class StoryRepository {
  async createStory(content, author) {
    try {
      const response = await Story.create({ content, author });
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw error;
    }
  }

  async readStory() {
    try {
      const response = await Story.find().sort({createdAt:-1});
      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }

  async clearStory(storyNeedToDeleted) {
    try {
      const response = await Story.deleteMany({ createdAt: { $lt: storyNeedToDeleted } });
      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }

}

export { StoryRepository };
