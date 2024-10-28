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
      const response = await Story.find();
      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }
}

export { StoryRepository };
