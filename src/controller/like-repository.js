import { LikeService } from "../services/index.js";

const likeService = new LikeService();

const like = async (req, res) => {
  try {
    const response = await likeService.toggleModel(
      req.body.modelName,
      req.body.modelId,
      req.headers.userid,
    );
    return res.status(200).json({
      data: response,
      scuccess: true,
      Message: "Item Liked Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      scuccess: false,
      error: { error },
      Message: "Item can not Like Successfully",
    });
  }
};

export { like };
