import React from "react";

const Post = () => {
  return (
    <div class="w-600 mw-full">
      <div class="card p-0">
        <div class="card-title p-10">
          <div className="d-flex">
            <img
              src="https://images.unsplash.com/photo-1597126730335-eef292fa4f21?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=60"
              class="img-fluid rounded-circle m-5 w-50 h-50"
              alt="rounded circle image"
            />
            <h4 className="ml-5">title here</h4>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1597132055361-ae81bab8f657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&q=60"
          class="img-fluid  "
          alt="Image"
        />

        <div class="content m-15">
          <div class="content-title d-flex h-50">
            <h5>title</h5>
            <h5 className="ml-5">caption here</h5>
          </div>
          <div>
            {/* <span class="badge"> */}
            <i class="fa fa-heart-o text-danger mr-5" aria-hidden="true"></i>
            {/* </span> */}
            <span class="ml-5">
              <i
                class="fa fa-comments-o text-primary mr-5"
                aria-hidden="true"
              ></i>
              {/* 5 comments */}
            </span>
          </div>
        </div>
        <div>
          <span class="text-muted m-15">
            <i class="fa fa-clock-o mr-5" aria-hidden="true"></i> May 4th, 2020
          </span>
        </div>
        <hr />

        <div class="content m-15">
          <h2 class="content-title">Comments</h2>
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
          <div class="text-center mt-20">
            <button class="btn btn-sm">Load all comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
