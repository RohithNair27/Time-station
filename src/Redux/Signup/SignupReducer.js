import { ACTION_TYPES } from "../ActionTypes";

const { SET_USER_ID, SET_USER_ROLE, SET_USER_NAME } = ACTION_TYPES;

const initalState = {
  USER_NAME: null,
  USER_ID: null,
  USER_ROLE: null,
};

function SignupReducer(state = initalState, action) {
  switch (action.type) {
    case SET_USER_ID:
      return {
        ...state,
        USER_ID: action.payload,
      };
    case SET_USER_ROLE:
      return {
        ...state,
        USER_ROLE: action.payload,
      };
    case SET_USER_NAME:
      return {
        ...state,
        USER_NAME: action.payload,
      };

    default: {
      return state;
    }
  }
}

export default SignupReducer;
