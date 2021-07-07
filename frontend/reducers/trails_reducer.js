import { RECEIVE_PARK_TRAILS } from "../actions/park_actions";

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_PARK_TRAILS:
      action.trails.forEach( trail => newState[trail.id] = trail)
      return newState;
    default:
      return state;
  }
};

export default trailsReducer;