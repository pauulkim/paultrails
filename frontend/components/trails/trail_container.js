import { connect } from "react-redux";
import { requestTrail } from "../../actions/trail_actions";
import { requestTrailReviews, makeReview, editReview, removeReview } from "../../actions/review_actions"
import Trail from "./trail";


const mSTP = (state, ownProps) => ({
  // trail props
  trailId: ownProps.match.params.trailId,
  trail: state.entities.trails[ownProps.match.params.trailId],

  // current user props
  loggedIn: Boolean(state.session.currentUserId),
  currentUser: state.session.currentUserId,

  // review props
  reviews: Object.values(state.entities.reviews)
});

const mDTP = dispatch => ({
  requestTrail: trailId => dispatch(requestTrail(trailId)), 
  requestTrailReviews: trailId => dispatch(requestTrailReviews(trailId)),
  makeReview: review => dispatch(makeReview(review)),
  editReview: (review, reviewId) => dispatch(editReview(review, reviewId)),
  removeReview: reviewId => dispatch(removeReview(reviewId))
});

export default connect(mSTP, mDTP)(Trail);