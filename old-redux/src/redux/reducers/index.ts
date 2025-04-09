import { combineReducers } from "redux";
import upDownReducer from "./upDown";

const rootReducer = combineReducers({
  upDownReducer,
});

export default rootReducer;
