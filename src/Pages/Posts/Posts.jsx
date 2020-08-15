import React from "react";
import Post from "../../Components/Post/Post";
import PostsContainer from "../../domains/post/containers/PostsContainer";
const Posts = () => {
  return (
    <div className="content-wrapper">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <PostsContainer>
          {({ posts }) =>
            posts.map((post) => {
              return <Post key={post.timestamp} {...post} />;
            })
          }
        </PostsContainer>
      </div>
    </div>
  );
};

export default Posts;
