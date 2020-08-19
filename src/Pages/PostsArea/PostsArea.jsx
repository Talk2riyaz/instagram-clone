import React from "react";
import PostContainer from "../../Components/Post/PostContainer";
import FeedContainer from "../../domains/post/containers/FeedContainer";
import Spinner from "../../Components/Spinner/Spinner";

const Posts = () => {
  return (
    <div className="content-wrapper">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <FeedContainer>
          {({ posts, handleAlert, loading }) => (
            <>
              {!loading ? (
                posts.map((post) => (
                  <PostContainer key={post.timestamp} {...post} />
                ))
              ) : (
                <Spinner />
              )}
              {/* <button onClick={handleAlert}>test</button> */}
            </>
          )}
        </FeedContainer>
      </div>
    </div>
  );
};

export default Posts;
