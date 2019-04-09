import { actions } from "./actions";

const USER_INITIAL_STATE = {
  detail: {}
};

const reducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.USER_DETAIL:
      return {
        ...state,
        detail: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
