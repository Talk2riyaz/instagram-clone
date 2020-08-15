import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="content m-15">
      <h2 className="content-title mb-10">Comments</h2>

      {comments &&
        Object.keys(comments).map((id) => (
          <div key={id}>
            <strong>{comments[id].userName}</strong>
            <br />
            {comments[id].comment}
            <hr />
          </div>
        ))}
      {/* <div className='text-center mt-20'>
        <button className='btn btn-sm'>Load all comments</button>
      </div> */}
    </div>
  );
};

export default CommentList;
