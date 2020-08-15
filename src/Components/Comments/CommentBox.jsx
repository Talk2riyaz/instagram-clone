import React, { useState } from "react";
import axios from "axios";

const Comments = ({ postId }) => {
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
      {localStorage.getItem("displayName") ? (
        <div className="input-group mb-10">
          <input
            style={{
              // color: "#57B8F7",
              // fontWeight: 800,
              border: "none",
            }}
            type="text"
            value={comment}
            className="form-control"
            placeholder="Add a comment"
            onChange={(e) => setComment(e.target.value)}
          />
          {/* <div className="input-group-append"> */}
          <button
            style={{
              color: "#57B8F7",
              fontWeight: 800,
              border: "none",
              boxShadow: "none",
            }}
            className="btn btn-default-sm"
            type="button"
            onClick={() => handleSubmit(postId)}
          >
            Post
          </button>
          {/* </div> */}
        </div>
      ) : null}
    </div>
  );
};

export default Comments;
