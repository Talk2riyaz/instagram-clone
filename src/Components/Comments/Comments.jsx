import React from "react";
import CommentList from "./CommentList";
import CommentBox from "./CommentBox";
const Comments = ({ comments, postId }) => {
  return (
    <>
      <CommentList comments={comments} />
      <CommentBox postId={postId} />
    </>
  );
};

export default Comments;
