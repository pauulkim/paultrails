import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS"
// export const CLEAR_SEARCH_RESULTS = "CLEAR_SEARCH_RESULTS"

// regular actions
const receiveSearchResults = results => ({
  type: RECEIVE_SEARCH_RESULTS,
  results
});

// thunk actions
export const requestSearchResults = () => dispatch => (
  SearchApiUtil.getSearchResults()
    .then(results => dispatch(receiveSearchResults(results)))
    // .fail
);