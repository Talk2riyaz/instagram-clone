import axios from "axios";
import * as actionTypes from "./actionTypes";

export const addComment = (postId, comment, displayName) => {
  console.log(displayName);
  return (dispatch) => {
    const body = {
      userName: displayName,
      comment: comment,
    };
    axios
      .post(
        `https://fayez-instagram.firebaseio.com/posts/${postId}/comments.json`,
        body
      )
      .then((response) => {
        dispatch(addCommentSuccess(response.data));
        // setTimeout(()=>{
        //   dispatch(ChangeFlag())
        // },500)
      })
      .catch((error) => dispatch(addCommentFailed(error)));
  };
};

// const ChangeFlag=()=>{
//   return{
//     type:
//   }
// }

const addCommentSuccess = (data) => {
  console.log(data);
  return {
    type: actionTypes.ADD_COMMENT_SUCCEESS,
  };
};

const addCommentFailed = (error) => {
  return {
    type: actionTypes.ADD_COMMENT_FAILED,
    payload: error,
  };
};
