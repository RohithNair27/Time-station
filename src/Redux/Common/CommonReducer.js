import { SHOW_HIDE_LOADER_ACTION } from "./CommonAction";
import { ACTION_TYPES } from "../ActionTypes";

const { SHOW_HIDE_LOADER, SHOW_HIDE_SIDE_NAVIGATION } = ACTION_TYPES;

const initialState = {
  loader: false,
  sideNavigation: true,
};
function COMMON_REDUCER(state = initialState, action) {
  switch (action.type) {
    case SHOW_HIDE_LOADER: {
      return {
        ...state,
        loader: action.payload,
      };
    }
    case SHOW_HIDE_SIDE_NAVIGATION: {
      return {
        ...state,
        loader: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}

export default COMMON_REDUCER;
