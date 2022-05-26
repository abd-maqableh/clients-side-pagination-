import { FORM_FILTER } from "../type";

export const getFromDate = (data) => (dispatch) => {
  dispatch({
    type: FORM_FILTER,
    payload: data,
  });
};
