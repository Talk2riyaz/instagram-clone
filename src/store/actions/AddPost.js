import * as actionTypes from "./actionTypes";
import { storage } from "../../firebase";
import axios from "axios";

export const addtPostInit = () => {
  return {
    type: actionTypes.ADD_POST_INIT,
  };
};

export const addPost = (image, caption, displayName) => {
  return (dispatch) => {
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
              displayName: displayName,
            };
            axios
              .post("https://fayez-instagram.firebaseio.com/posts.json", body)
              .then(() => {
                dispatch(AddPostSuccess(body));
              })
              .catch((error) => {
                dispatch(AddPostFailed(error));
              });
          });
      }
    );
  };
};

const AddPostSuccess = (body) => {
  console.log(body);
  return {
    type: actionTypes.ADD_POST_SUCCESS,
    payload: body,
  };
};
const AddPostFailed = (error) => {
  return {
    type: actionTypes.ADD_POST_FAILED,
    payload: error,
  };
};
