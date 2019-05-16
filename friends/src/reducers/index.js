import { LOGIN_START, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions";

const intialState = {
  isLoggedIn: false,
  error: ""
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggedIn: true,
        error: ""
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
        error: ""
      };
    default:
      return state;
  }
};

export default reducer;
