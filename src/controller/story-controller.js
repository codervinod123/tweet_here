import { StoryService } from "../services/story-services.js";
import { uploadOnCloudinary } from "../utils/upload-cloudinary.js";

const storyService = new StoryService();

const addStories = async (req, res) => {
  try {
    if (req.file) {
      const imageURI = await uploadOnCloudinary(req.file.path);
      req.body = { ...req.body, media: imageURI.url };
    }
    const response = await storyService.createStory(
      req.body.media,
      req.headers.userid,
    );
    return res.status(200).json({
      data: response,
      scuccess: true,
      Message: "Story added Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      scuccess: false,
      error: { error },
      Message: "Story can not added Successfully",
    });
  }
};

const readStory = async (req, res) => {
  try {
    const response = await storyService.readStory();
    return res.status(200).json({
      data: response,
      scuccess: true,
      Message: "Story fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      scuccess: false,
      error: { error },
      Message: "Story can not fetched Successfully",
    });
  }
};


const clearStory = async (req, res) => {
    try {
      const response = await storyService.clearStory();
      return res.status(200).json({
        data: response,
        scuccess: true,
        Message: "Story Cleared Successfully",
      });
    } catch (error) {
      return res.status(500).json({
        scuccess: false,
        error: { error },
        Message: "Story can not clear Successfully",
      });
    }
  };

export { addStories, readStory , clearStory};
