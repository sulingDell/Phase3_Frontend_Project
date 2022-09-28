import { combineReducers } from "redux";
import likeCounterReducer from "./LikeCounter";
import loggedInReducer from "./LoggedIn";

const allReducer = combineReducers({
    likeCounter : likeCounterReducer,
    isLoggedIn : loggedInReducer
});

export default allReducer;