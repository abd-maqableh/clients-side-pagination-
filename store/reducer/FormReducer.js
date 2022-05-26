import { FORM_FILTER } from "../type";

const initialState = {
  formFilter: {},
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case FORM_FILTER:
      return {
        ...state,
        formFilter: { ...action.payload },
      };
    default:
      return state;
  }
};

export default formReducer;
