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

  async clearStory() {
    try {
      const oneDayBackTime = new Date().getTime();
      const timeWhenTodelete = oneDayBackTime - 1000*60*60*24;
      const deleteTime=new Date(timeWhenTodelete).toISOString().replace('Z', '+00:00');   
      const response=await this.storyRepository.clearStory(deleteTime);    
      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }

}
export { StoryService };
