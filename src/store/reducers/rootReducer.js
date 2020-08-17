import loginReducer from "./LoginReducer";
import PostsReducer from "./PostsReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

const rootReducer = combineReducers({
  login: loginReducer,
  posts: PostsReducer,
});

export default persistReducer(persistConfig, rootReducer);
