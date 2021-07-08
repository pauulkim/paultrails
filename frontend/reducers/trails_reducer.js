import { RECEIVE_PARK_TRAILS } from "../actions/park_actions";
import { RECEIVE_TRAIL } from "../actions/trail_actions";

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_PARK_TRAILS:
      action.trails.forEach( trail => newState[trail.id] = trail)
      return newState;
    case RECEIVE_TRAIL:
      newState[action.trail.id] = action.trail;
      return newState;
    default:
      return state;
  }
};

export default trailsReducer;