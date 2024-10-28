import { StoryRepository } from "../repository/story-repository.js";

class StoryService {
  constructor() {
    this.storyRepository = new StoryRepository();
  }

  async createStory(content, author) {
    try {
      const response = await this.storyRepository.createStory(content, author);
      return response;
    } catch (error) {
      console.log("can not search", error);
      throw error;
    }
  }

  async readStory() {
    try {
      const response = await this.storyRepository.readStory();
      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }
}
export { StoryService };
