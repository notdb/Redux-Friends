import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  FETCHING_FRIENDS_START,
  FETCHING_FRIENDS_SUCCESS,
  FETCHING_FRIENDS_ERROR,
  ADDING_FRIENDS_START,
  ADDING_FRIENDS_SUCCESS,
  ADDING_FRIENDS_ERROR
} from "../actions";

const intialState = {
  isLoggedIn: false,
  error: "",
  fetching_friends: false,
  friends: [],
  adding_friend: false
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
    case FETCHING_FRIENDS_START:
      return {
        ...state,
        fetching_friends: true,
        error: ""
      };
    case FETCHING_FRIENDS_SUCCESS:
      return {
        ...state,
        fetching_friends: false,
        friends: action.payload,
        error: ""
      };
    case FETCHING_FRIENDS_ERROR:
      return {
        ...state,
        fetching_friends: false,
        error: action.payload
      };
    case ADDING_FRIENDS_START:
      return {
        ...state,
        adding_friend: true,
        error: ""
      };
    case ADDING_FRIENDS_SUCCESS:
      return {
        ...state,
        adding_friend: false,
        friends: action.payload,
        error: ""
      };
    case ADDING_FRIENDS_ERROR:
      return {
        ...state,
        adding_friend: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
