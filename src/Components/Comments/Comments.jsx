import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
const Comments = ({ comments, postId }) => {
  return (
    <React.Fragment>
      <CommentList comments={comments} />
      <CommentBox postId={postId} />
    </React.Fragment>
  );
};

export default Comments;
