import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

import { requestTrailReviews, makeReview, editReview, removeReview } from "./actions/review_actions"

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser 
        }
      },
      session: {
        currentUserId: window.currentUser.id
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //testing

  window.store = store;
  window.requestTrailReviews = requestTrailReviews;
  window.makeReview = makeReview;
  window.editReview = editReview;
  window.removeReview = removeReview;

  // end testing
  
  ReactDOM.render(<Root store={store} />, root)
});