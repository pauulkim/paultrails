import React from 'react';
import { Route, Switch } from 'react-router';

import NavBarContainer from "./nav/nav_bar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute } from '../util/route_util';
import HomePageContainer from './home_page/home_page_container';
import ParkContainer from './parks/park_container';
import TrailContainer from './trails/trail_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />

    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route path="/parks/:parkId" component={ParkContainer} />
      <Route path="/trail/:trailId" component={TrailContainer} />
    </Switch>
  </div>
);

export default App;