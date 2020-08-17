import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/actions/AddPost";
import Spinner from "../../Components/Spinner/Spinner";
const AddPost = ({
  history,
  onAddtPostInit,
  displayName,
  onAddPost,
  loading,
  postSuccessful,
}) => {
  useEffect(() => {
    if (postSuccessful) {
      history.push("/");
    }
  });
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  console.log(loading);
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddtPostInit();
    onAddPost(image, caption, displayName);
  };

  return (
    <div className="content-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        <form onSubmit={handleSubmit} className="container mw-full w-400 mt-20">
          <div className="form-group">
            <label className="" htmlFor="Caption">
              Caption
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Caption"
              id="caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </div>
          <div className="custom-file">
            <input
              type="file"
              id="file-input"
              data-default-value="<a href='...' target='_blank' rel='noopener'></a>"
              accept=".jpg,.png"
              onChange={(e) =>
                e.target.files[0] ? setImage(e.target.files[0]) : null
              }
            />
            <label htmlFor="file-input">Choose picture</label>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-10"
            value="Add Post"
          ></input>
        </form>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    displayName: state.login.loginResponse[0]?.displayName,
    loading: state.posts.loading,
    postSuccessful: state.posts.AddPostSuccessful,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddtPostInit: () => dispatch(actions.addtPostInit()),
    onAddPost: (image, caption, displayName) =>
      dispatch(actions.addPost(image, caption, displayName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddPost);
