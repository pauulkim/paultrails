import React from 'react';
import { Route } from 'react-router';

import NavBarContainer from "./nav/nav_bar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePageContainer from './home_page/home_page_container';
import ParksContainer from './parks/parks_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Route exact path="/" component={HomePageContainer} />
    <Route path="/parks/:parkId" component={ParksContainer} />
  </div>
);

export default App;