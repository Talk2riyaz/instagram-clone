import React from "react";

const Post = ({ postId, displayName, url, comments, caption, timestamp }) => {
  return (
    <>
      <div className="card-title p-1">
        <div className="d-flex">
          <img
            src="https://images.unsplash.com/photo-1597126730335-eef292fa4f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=60"
            className="img-fluid rounded-circle m-5 w-50 h-50"
            alt="rounded circle"
          />
          <h4 className="ml-5">{displayName}</h4>
        </div>
      </div>
      <img
        src={url}
        className="img-fluid"
        style={{ objectFit: "cover", objectPosition: "50% 50%" }}
        alt=""
      />

      <div className="content m-15">
        <div className="content-title d-flex  align-items-center h-50">
          <h5>
            <strong>{displayName} </strong>
          </h5>

          <h6 className="ml-5">{caption}</h6>
        </div>
        <div>
          <i
            style={{ fontSize: "25px" }}
            className="fa fa-heart-o mr-5"
            aria-hidden="true"
          ></i>

          <span className="ml-5">
            <i
              style={{ fontSize: "25px" }}
              className="fa fa-comments-o  mr-5"
              aria-hidden="true"
            >
              {comments && Object.keys(comments).length}
            </i>
          </span>
        </div>
      </div>
      <div>
        <span className="text-muted m-15">
          <i className="fa fa-clock-o mr-5" aria-hidden="true"></i>
          {new Date(timestamp).toDateString()}
        </span>
      </div>
    </>
  );
};

export default Post;
