/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../../store/actions/posts";

const PostsContainer = ({
  children,
  onGetPostsLength,
  posts,
  loading,
  error,
  smallLoader,
  count,
  length,
  onGetMorePosts,
  onMorePostLoader,
}) => {
  useEffect(() => {
    onGetPostsLength();
  }, []);
  if (error) {
    alert(error.message);
  }

  return children({
    posts,
    loading,
    onGetMorePosts,
    smallLoader,
    count,
    length,
    onMorePostLoader,
  });
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
    length: state.posts.length,
    count: state.posts.count,
    smallLoader: state.posts.smallLoader,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPostsLength: () => dispatch(action.getPostsLength()),
    onGetMorePosts: (num) => dispatch(action.getMorePosts(num)),
    onMorePostLoader: () => dispatch(action.getMorePostLoader()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
