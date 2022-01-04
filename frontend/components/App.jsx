import React from "react";
import GreetingContainer from './splash/greeting/greeting_container';
import { AuthRoute } from "../util/route_util";
import { Route } from 'react-router';
import SongShowContainer from './song/song_show_container';
import DiscoverContainer from './discover/discover_container';




const App = () => (
  <div className="main overlay hide">
    <header>
        
    </header>

    <Route exact path="/" component={GreetingContainer} />
    <Route path={`/songs/:songId`} component={SongShowContainer}></Route>
    
  </div>
);

export default App;