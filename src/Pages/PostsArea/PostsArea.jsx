import React from "react";
import PostContainer from "../../Components/Post/PostContainer";
import FeedContainer from "../../domains/post/containers/FeedContainer";

const Posts = () => {
  return (
    <div className="content-wrapper">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <FeedContainer>
          {({ posts }) =>
            posts.map((post) => {
              return <PostContainer key={post.timestamp} {...post} />;
            })
          }
        </FeedContainer>
      </div>
    </div>
  );
};

export default Posts;
