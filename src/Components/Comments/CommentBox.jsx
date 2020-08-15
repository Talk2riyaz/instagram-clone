import React, { useState } from "react";
import axios from "axios";
import CommentList from "./CommentList";

const Comments = ({ comments, postId }) => {
  const [comment, setComment] = useState("");
  const handleSubmit = (postId) => {
    const displayName = localStorage.getItem("displayName");
    const body = {
      userName: displayName,
      comment: comment,
    };
    axios
      .post(
        `https://fayez-instagram.firebaseio.com/posts/${postId}/comments.json`,
        body
      )
      .then(() => window.location.reload())
      .then((response) => console.log(response))
      .then(setComment(""));
  };
  return (
    <div className="content m-15">
      <h2 className="content-title mb-10">Comments</h2>
      {localStorage.getItem("displayName") ? (
        <div className="input-group mb-10">
          <input
            type="text"
            value={comment}
            className="form-control"
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => handleSubmit(postId)}
            >
              Post
            </button>
          </div>
        </div>
      ) : null}

      <hr />
      <hr />
      <CommentList comments={comments} />
    </div>
  );
};

export default Comments;
