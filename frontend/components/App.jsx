import React from "react";
import { AuthRoute, LogRoute } from "../util/route_util";
import { Route } from 'react-router';
import GreetingContainer from './splash/greeting/greeting_container';
import SongShowContainer from './song/song_show_container';
import DiscoverContainer from './discover/discover_container';
import UpdateSongContainer from './upload/update_song_container';
import CreateSongContainer from './upload/create_song_container';




const App = () => (
  <div className="main overlay hide">
    <header>
        
    </header>

    <AuthRoute exact path="/" component={GreetingContainer} />
    <Route path={`/songs/:songId`} component={SongShowContainer} />
    <LogRoute exact path='/discover' component={DiscoverContainer} />
    <LogRoute exact path='/upload' component={CreateSongContainer} />
    
    
  </div>
);

export default App;