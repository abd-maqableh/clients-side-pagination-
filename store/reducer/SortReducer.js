import { SORT_TABLE } from "../type";

const initialState = {
  sortTable: {},
};

const sortReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_TABLE:
      return {
        ...state,
        sortTable: action.payload,
      };
    default:
      return state;
  }
};

export default sortReducer;
