import React from "react";
import PostContainer from "../../Components/Post/PostContainer";
import FeedContainer from "../../domains/post/containers/FeedContainer";
import Spinner from "../../Components/Spinner/Spinner";
import SmallSpinner from "./../../Components/smallSpinner/smallSpinner";

const Posts = () => {
  return (
    <div className="content-wrapper">
      <div className="container d-flex align-items-center justify-content-center flex-column">
        <FeedContainer>
          {({
            posts,
            onMorePostLoader,
            onGetMorePosts,
            loading,
            smallLoader,
            count,
            length,
          }) => (
            <>
              {!loading ? (
                posts.map((post) => (
                  <PostContainer key={post.timestamp} {...post} />
                ))
              ) : (
                <Spinner />
              )}
              {count >= length ? null : !smallLoader ? (
                <button
                  className="btn btn-lg mb-20"
                  onClick={() => {
                    onMorePostLoader();
                    onGetMorePosts(count, length);
                  }}
                >
                  Load More Post...
                </button>
              ) : (
                <SmallSpinner />
              )}
            </>
          )}
        </FeedContainer>
      </div>
    </div>
  );
};

export default Posts;
