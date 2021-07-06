import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

// import { login, logout, signUp } from "./actions/session_actions" // testing

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
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  // window.login = login;
  // window.logout = logout;
  // window.signUp = signUp;
  // end testing
  
  ReactDOM.render(<Root store={store} />, root)
});