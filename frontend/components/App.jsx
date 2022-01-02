import React from "react";
import GreetingContainer from './greeting/greeting_container';
import SplashContainer from "./splash/splash_container";
import { AuthRoute } from "../util/route_util";

const App = () => (
  <div className="main">
    <header>
        <h1 className="logo">SOUNDWAVE</h1>
        <GreetingContainer />
    </header>

    {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
    
  </div>
);

export default App;