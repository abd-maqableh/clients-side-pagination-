import { combineReducers } from "redux";
import formReducer from "./FormReducer";
import sortReducer from "./sortReducer";

export default combineReducers({
  FormData: formReducer,
  sortReducer,
});
