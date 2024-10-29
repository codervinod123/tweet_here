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
 
      const storyNeedToDeleted = new Date();
      storyNeedToDeleted.setDate(storyNeedToDeleted.getDate() - 1);
      console.log(storyNeedToDeleted);

      const response=await this.storyRepository.clearStory(storyNeedToDeleted);

      // response.map((res)=>{
      //    if(res.createdAt < storyNeedToDeleted){
      //     console.log("Need to delete");
      //    }else{
      //     console.log("Can not delete right now");
      //    }
      // })


      

      return response;
    } catch (error) {
      console.log("can not get all story", error);
      throw error;
    }
  }

}
export { StoryService };
