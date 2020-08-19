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
}) => {
  useEffect(() => {
    onGetPostsLength();
  }, []);
  if (error) {
    alert(error.message);
  }
  const handleAlert = () => {
    alert("hi");
  };

  return children({ posts, loading, handleAlert });
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts.posts,
    loading: state.posts.loading,
    error: state.posts.error,
    length: state.posts.length,
    count: state.posts.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPostsLength: () => dispatch(action.getPostsLength()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
