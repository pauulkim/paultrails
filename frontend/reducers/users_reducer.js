import { RECEIVE_CURRENT_USER } from "../actions/session_actions";

const usersReducer = (state = {}, action) => {
    Object.freeze(state);
    // let newState = Object.assign({}, state);

    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return Object.assign({}, state, { [action.user.id]: action.user });
      // add LOGOUT_CURRENT_USER to return {} ?
      default:
        return state;
    };
};

export default usersReducer;