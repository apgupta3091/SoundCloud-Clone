import React from "react";
import GreetingContainer from './splash/greeting/greeting_container';
import { AuthRoute } from "../util/route_util";





const App = () => (
  <div className="main overlay hide">
    <header>
        <h1 className="logo">SOUNDWAVE</h1>
        <GreetingContainer />
    </header>

    {/* <AuthRoute exact path="/" component={GreetingContainer} /> */}
    
  </div>
);

export default App;