import { getTrail } from "../util/trail_api_util";

export const RECEIVE_TRAIL = "RECEIVE_TRAIL";

const receiveTrail = trail => ({
  type: RECEIVE_TRAIL,
  trail
});

export const requestTrail = trailId => dispatch => (
  getTrail(trailId)
    .then(trail => dispatch(receiveTrail(trail)))
);