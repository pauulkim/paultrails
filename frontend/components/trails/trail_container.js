import { connect } from "react-redux";
import { requestTrail } from "../../actions/trail_actions";
import Trail from "./trail";


const mSTP = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUserId),
  trailId: ownProps.match.params.trailId,
  trail: state.entities.trails[ownProps.match.params.trailId]
});

const mDTP = dispatch => ({
  requestTrail: trailId => dispatch(requestTrail(trailId))
});

export default connect(mSTP, mDTP)(Trail);