import { connect } from "react-redux";
import { requestPark, requestParkTrails } from "../../actions/park_actions";
import Park from "./park";

const mSTP = (state, ownProps) => {
  debugger
  return {
    parkId: ownProps.match.params.parkId, // get park id from url
    park: state.entities.parks[ownProps.match.params.parkId], // get park slice of state
    trails: Object.values(state.entities.trails)
  }
};

const mDTP = dispatch => ({
  requestPark: parkId => dispatch(requestPark(parkId)),
  requestParkTrails: parkId => dispatch(requestParkTrails(parkId))
});

export default connect(mSTP, mDTP)(Park);