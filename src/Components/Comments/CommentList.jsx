import React from "react";

const CommentList = ({ comments }) => {
  return (
    <React.Fragment>
      {comments &&
        Object.keys(comments).map((id) => (
          <div key={id}>
            <strong>{comments[id].userName}</strong>
            <br />
            {comments[id].comment}
          </div>
        ))}
      <div className="text-center mt-20">
        <button className="btn btn-sm">Load all comments</button>
      </div>
    </React.Fragment>
  );
};

export default CommentList;
