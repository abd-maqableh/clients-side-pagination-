import { combineReducers } from "redux";
import formReducer from "./FormReducer";

export default combineReducers({
  FormData: formReducer,
});
