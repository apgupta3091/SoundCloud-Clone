import React from "react";
import GreetingContainer from './greeting/greeting_container';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import { Route } from 'react-router-dom';
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
        <h1>SoundWave</h1>
        <GreetingContainer />
    </header>

    <AuthRoute path="/login" component={LoginContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
  </div>
);

export default App;