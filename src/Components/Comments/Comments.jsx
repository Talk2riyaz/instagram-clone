import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
const Comments = ({ comments, postId }) => {
  return (
    <React.Fragment>
      <CommentBox postId={postId} />
      <CommentList comments={comments} />
    </React.Fragment>
  );
};

export default Comments;
