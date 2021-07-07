import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

import { requestParkTrails } from "./actions/park_actions";

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
  window.requestParkTrails = requestParkTrails;
  
  // end testing
  
  ReactDOM.render(<Root store={store} />, root)
});