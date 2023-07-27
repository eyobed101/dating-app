// index.js

import { combineReducers } from "redux";
import datingReducer from "./datingReducer";

const rootReducer = combineReducers({
  dating: datingReducer,
});

export default rootReducer;
