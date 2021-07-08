import { RECEIVE_PARK } from "../actions/park_actions";

const parksReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  debugger
  switch (action.type) {
    case RECEIVE_PARK:
      debugger
      newState[action.park.id] = action.park;
      return newState;
    default:
      debugger
      return state;
  }
};

export default parksReducer