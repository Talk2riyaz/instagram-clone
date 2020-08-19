import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getPostsLength = () => {
  return (dispatch) => {
    axios
      .get(`https://fayez-instagram.firebaseio.com/posts.json?shallow=true`)
      .then((response) => {
        if (response.data) {
          const length = Object.keys(response.data).length;
          dispatch(getPosts(length));
          // dispatch(getPostSuccess(length));
        }
      })
      .catch((error) => {
        dispatch(getPostFailed(error));
      });
  };
};

export const getPosts = (length) => {
  return (dispatch) => {
    axios
      .get(
        `https://fayez-instagram.firebaseio.com/posts.json?orderBy="timestamp"&limitToLast=5`
      )
      .then((response) => {
        if (response.data) {
          const sortedPost = Object.keys(response.data)
            .map((id) => ({
              postId: id,
              ...response.data[id],
            }))
            // .filter((_, i) => i < 2)
            .sort((a, b) => b.timestamp - a.timestamp);
          dispatch(getPostSuccess(sortedPost, length));
        }
      })
      .catch((error) => {
        dispatch(getPostFailed(error));
      });
  };
};

export const getMorePosts = (length) => {
  return (dispatch) => {
    axios
      .get(
        `https://fayez-instagram.firebaseio.com/posts.json?orderBy="timestamp"&limitToLast=5`
      )
      .then((response) => {
        if (response.data) {
          const sortedPost = Object.keys(response.data)
            .map((id) => ({
              postId: id,
              ...response.data[id],
            }))
            // .filter((_, i) => i < 2)
            .sort((a, b) => b.timestamp - a.timestamp);
          dispatch(getPostSuccess(sortedPost, length));
        }
      })
      .catch((error) => {
        dispatch(getPostFailed(error));
      });
  };
};

const getPostSuccess = (posts, length) => {
  const data = {
    posts,
    length,
  };
  return {
    type: actionTypes.GET_POSTS_SUCCESS,
    payload: data,
  };
};

const getPostFailed = (error) => {
  return {
    type: actionTypes.GET_POSTS_FAILED,
    payload: error,
  };
};
