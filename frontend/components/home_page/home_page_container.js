import { connect } from "react-redux";
import Home from "./home_page";
import { requestSearchResults } from "../../actions/search_actions"

const mSTP = state => ({
  search: state.entities.search
});

const mDTP = dispatch => ({
  requestSearchResults: () => dispatch(requestSearchResults())
})

export default connect(mSTP, mDTP)(Home);