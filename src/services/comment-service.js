// import Comment from "../models/comment-model.js";
// import Tweet from "../models/tweet-model.js";

// export class CommentService{
     
//     async toggleModel(modelName,modelId,userId,commentItem){
//         try {
//               if(modelName=='Tweet'){ //api/v1/comment/modelId=323/Tweet?true
//                  const response=await Comment.create({
//                    onModel: modelName,
//                     commentable:modelId,
//                     comment:commentItem,
//                     user: userId,
//                   });
//                   const tweet=await Tweet.findById(modelId);
//                   await tweet.comments.push(response);
//                   tweet.save();
//                   return response;
//               }
//               else if(modelName=='Comment'){
//                  const comment=await Comment.findById(modelId);
//                  const response=await Comment.create({
//                      onModel: modelName,
//                      commentable:modelId,
//                      comment:commentItem,
//                      user: userId,
//                  });
//                  await comment.comments.push(response);
//                  comment.save();
//                  return response;
//               }
//         } catch (error) {
//             console.log('Error has occured',error);
//         }
//     }

// }

