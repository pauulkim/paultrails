import { RECEIVE_TRAIL_REVIEWS, CREATE_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_TRAIL_REVIEWS:
      action.reviews.forEach( review => newState[review.id] = review);
      return newState;
    case CREATE_REVIEW:
      return Object.assign({}, state, { [action.review.id] : action.review });
    case UPDATE_REVIEW:
      return Object.assign({}, state, { [action.review.id] : action.review });
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      delete newState[action.reviewId]
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;