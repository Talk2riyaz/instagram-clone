import loginReducer from "./LoginReducer";
import PostsReducer from "./PostsReducer";
import commentBoxReducer from "./CommentBoxReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import SignUpReducer from "./SignUpReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "signUp"],
};

const rootReducer = combineReducers({
  comment: commentBoxReducer,
  login: loginReducer,
  posts: PostsReducer,
  signUp: SignUpReducer,
});

export default persistReducer(persistConfig, rootReducer);
