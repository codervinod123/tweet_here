import { CommentService } from "../services/comment-service.js";

const commentService = new CommentService();

const createComment = async (req, res) => {
  try {
    const response = await commentService.toggleModel(
      req.query.modelName,
      req.query.modelId,
      req.body.userId,
      req.body.commentItem,
    );
    return res.status(200).json({
      data: response,
      cuccess: true,
      error: {},
      Message: "Comment created Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      cuccess: false,
      error: { error },
      Message: "Comment can not created Successfully",
    });
  }
};

export default createComment;
