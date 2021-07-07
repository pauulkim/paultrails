import * as ParkApiUtil from "../util/park_api_util";

export const RECEIVE_PARK = "RECEIVE_PARK";
export const RECEIVE_PARK_TRAILS = "RECEIVE_PARK_TRAILS";

export const receivePark = park => ({
  type: RECEIVE_PARK,
  park
});

export const receiveParkTrails = trails => ({
  type: RECEIVE_PARK_TRAILS,
  trails
});

export const requestPark = parkId => dispatch => (
  ParkApiUtil.getPark(parkId)
    .then(park => dispatch(receivePark(park)))
);

export const requestParkTrails = parkId => dispatch => (
  ParkApiUtil.getParkTrails(parkId)
    .then(trails => dispatch(receiveParkTrails(trails)))
);