import { combineReducers } from "redux";
import parksReducer from "./parks_reducer";
import reviewsReducer from "./reviews_reducer";
import trailsReducer from "./trails_reducer";
import usersReducer from "./users_reducer";
import searchReducer from "./search_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  parks: parksReducer,
  trails: trailsReducer,
  reviews: reviewsReducer,
  search: searchReducer
});

export default entitiesReducer;