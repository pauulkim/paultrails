import * as ReviewAPIUtil from "../util/review_api_util";

export const RECEIVE_TRAIL_REVIEWS = "RECEIVE_TRAIL_REVIEWS";
export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

const receiveTrailReviews = reviews => ({
  type: RECEIVE_TRAIL_REVIEWS,
  reviews
});

const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

const updateReview = review => ({
  type: UPDATE_REVIEW,
  review
});

const destroyReview = () => ({
  type: DELETE_REVIEW
});

export const requestTrailReviews = trailId => dispatch => (
  ReviewAPIUtil.getTrailReviews(trailId)
    .then(reviews => dispatch(receiveTrailReviews(reviews)))
);

export const makeReview = review => dispatch => (
  ReviewAPIUtil.postReview(review)
    .then(review => dispatch(createReview(review)))
    // .fail()
);

export const editReview = (review, reviewId) => dispatch => (
  ReviewAPIUtil.patchReview(review, reviewId)
    .then(review => dispatch(updateReview(review)))
);

export const removeReview = reviewId => dispatch => (
  ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(destroyReview()))
);