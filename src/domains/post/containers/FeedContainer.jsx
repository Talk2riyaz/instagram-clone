/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { connect } from "react-redux";
import * as action from "../../../store/actions/posts";

const PostsContainer = ({ children, onGetPosts, posts, loading, error }) => {
  useEffect(() => {
    onGetPosts();
  }, []);
  if (error) {
    alert(error.message);
  }

  return children({ posts, loading });
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => dispatch(action.getPosts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
