import { ACTION_TYPES } from "../ActionTypes";

const { SHOW_HIDE_LOADER, SHOW_HIDE_SIDE_NAVIGATION } = ACTION_TYPES;

export const SHOW_HIDE_LOADER_ACTION = (bool) => {
  return {
    type: SHOW_HIDE_LOADER,
    payload: bool,
  };
};

export const SHOW_HIDE_SIDE_NAVIGATION_ACTION = (bool) => {
  return {
    type: SHOW_HIDE_SIDE_NAVIGATION,
    payload: bool,
  };
};
