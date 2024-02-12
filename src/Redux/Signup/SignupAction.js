import { ACTION_TYPES } from "../ActionTypes";

const { SET_USER_ID, SET_USER_ROLE, SET_USER_NAME, SET_IS_LOGGED_IN } =
  ACTION_TYPES;

export function setLoggedIn(bool) {
  return {
    type: SET_IS_LOGGED_IN,
    payload: bool,
  };
}

export function setUserName(USER_NAME) {
  return {
    type: SET_USER_NAME,
    plyload: USER_NAME,
  };
}

export function setUserId(USER_ID) {
  return {
    type: SET_USER_ID,
    payload: USER_ID,
  };
}
export function setUserRole(USER_ROLE) {
  return {
    type: SET_USER_ROLE,
    payload: USER_ROLE,
  };
}
