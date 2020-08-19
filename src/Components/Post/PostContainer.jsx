import React from "react";
import Comments from "../Comments/Comments";
import Post from "./Post";

const PostContainer = ({
  postId,
  displayName,
  url,
  comments,
  caption,
  timestamp,
}) => {
  return (
    <div className="w-600 mw-full">
      <div className="card p-0">
        <Post
          postId={postId}
          displayName={displayName}
          comments={comments}
          url={url}
          caption={caption}
          timestamp={timestamp}
        />
        <hr />
        <Comments comments={comments} postId={postId} />
      </div>
    </div>
  );
};

export default PostContainer;
