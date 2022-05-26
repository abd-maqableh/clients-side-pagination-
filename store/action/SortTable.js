import { SORT_TABLE } from "../type";

export const getSortTable = (data) => (dispatch) => {
  dispatch({
    type: SORT_TABLE,
    payload: data,
  });
};
