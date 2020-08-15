import React, { useState } from "react";
import { storage } from "../../firebase";
import axios from "axios";

const AddPost = (props) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    var uploadTask = storage.ref(`images/${image.name}`).put(image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // console.log(snapshot);
      },
      (error) => {
        console.error({ error });
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            const body = {
              timestamp: new Date().getTime(),
              caption: caption,
              url: url,
              displayName: localStorage.getItem("displayName"),
            };
            axios
              .post("https://fayez-instagram.firebaseio.com/posts.json", body)
              .then(() => {
                props.history.push("/");
                window.location.reload();
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    );
  };

  return (
    <div className="content-wrapper">
      <form onSubmit={handleSubmit} className="  container  w-400 mt-20">
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
    </div>
  );
};

export default AddPost;
