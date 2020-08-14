import React from "react";

const Post = ({ caption, url, displayName }) => {
  return (
    <div className="w-600 mw-full">
      <div className="card p-0">
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
              <strong>name </strong>
            </h5>

            <h6 className="ml-5">{caption}</h6>
          </div>
          <div>
            <i
              className="fa fa-heart-o text-danger mr-5"
              aria-hidden="true"
            ></i>

            <span className="ml-5">
              <i
                className="fa fa-comments-o text-primary mr-5"
                aria-hidden="true"
              ></i>
            </span>
          </div>
        </div>
        <div>
          <span className="text-muted m-15">
            <i className="fa fa-clock-o mr-5" aria-hidden="true"></i> May 4th,
            2020
          </span>
        </div>
        <hr />

        <div className="content m-15">
          <h2 className="content-title mb-10">Comments</h2>
          <div className="input-group mb-10">
            <input
              type="email"
              className="form-control"
              placeholder="Add a comment"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                Post
              </button>
            </div>
          </div>
          <div>
            <strong>John Doe</strong>
            <br />
            Amazing picture! Great job!
          </div>
          <hr />
          <div>
            <strong>Jane Doe</strong>
            <br />
            This is beautiful.
          </div>
          <hr />
          <div className="text-center mt-20">
            <button className="btn btn-sm">Load all comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
