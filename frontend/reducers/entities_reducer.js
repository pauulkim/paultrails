import { combineReducers } from "redux";
import parksReducer from "./parks_reducer";
import trailsReducer from "./trails_reducer";
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  parks: parksReducer,
  trails: trailsReducer
  // add trails, reviews reducers
});

export default entitiesReducer;