import { FORM_FILTER } from "../type";

export const getFromDate = (data) => (dispatch) => {
  console.log("data", data);
  dispatch({
    type: FORM_FILTER,
    payload: data,
  });
};
