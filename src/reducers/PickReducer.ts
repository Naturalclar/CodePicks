import { PICK_ARTILCE_SELECT, PICK_ARTILCE_SUCCESS } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PICK_ARTILCE_SELECT:
      return action.payload;
    case PICK_ARTILCE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
