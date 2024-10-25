import { CommentService } from "../services/index.js";

const commentService = new CommentService();

const createComment = async (req, res) => {
  try {
    const response = await commentService.toggleModel(
      req.headers.modelname,
      req.headers.modelid,
      req.headers.userid,
      req.body.commentItem,
    );
    return res.status(200).json({
      response: response,
      scuccess: true,
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

const getComments = async (req, res) => {
  const pageNo = req.query.page;
  try {
    const response = await commentService.readComments(
      req.headers.postid,
      pageNo,
    );
    return res.status(200).json({
      response: response,
      scuccess: true,
      Message: "Comment fetched Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      cuccess: false,
      error: { error },
      Message: "Comment can not fetched Successfully",
    });
  }
};

export { createComment, getComments };
