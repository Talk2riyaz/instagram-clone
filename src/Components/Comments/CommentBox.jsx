import React, { useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import * as action from "../../store/actions/CommentBox";

const CommentBox = ({
  postId,
  isLogin,
  displayName,
  signUpSuccess,
  onAddComment,
}) => {
  const [comment, setComment] = useState("");
  // const handleSubmit = (postId) => {
  //   onAddComment(postId, comment, displayName);
  //   setComment("");
  // };
  return (
    <div className="content m-15">
      {signUpSuccess || isLogin ? (
        <div className="input-group mb-10">
          <input
            style={{
              border: "none",
            }}
            type="text"
            value={comment}
            className="form-control"
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            style={{
              color: "#57B8F7",
              fontWeight: 800,
              border: "none",
              boxShadow: "none",
            }}
            className="btn btn-default-sm"
            type="submit"
            onClick={() => {
              onAddComment(postId, comment, displayName);
              setComment("");
            }}
          >
            Post
          </button>
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    displayName: state.login?.loginResponse[0]?.displayName,
    signUpSuccess: state.signUp.signUpSuccess,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddComment: (postId, comment, displayName) =>
      dispatch(action.addComment(postId, comment, displayName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
