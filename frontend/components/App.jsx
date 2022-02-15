import React from "react";
import { AuthRoute, LogRoute } from "../util/route_util";
import { Route } from 'react-router';
import GreetingContainer from './splash/greeting/greeting_container';
import SongShowContainer from './song/song_show_container';
import DiscoverContainer from './discover/discover_container';
import UpdateSongContainer from './upload/update_song_container';
import CreateSongContainer from './upload/create_song_container';
import PlayerContainer from './play/play_container';
import UserShowContainer from "./user_pages/user_show_container";
import EditUserContainer from './user_pages/edit_user_container'





const App = () => (
  <div className="main overlay hide">
    <header>
      
    </header>
   

    <AuthRoute exact path="/" component={GreetingContainer} />
    <Route path={`/songs/:songId`} component={SongShowContainer} />
    <LogRoute exact path='/discover' component={DiscoverContainer} />
    <LogRoute exact path='/upload' component={CreateSongContainer} />
    <LogRoute exact path='/update/:songId' component={UpdateSongContainer} />
    <LogRoute exact path='/edit/:userId' component={EditUserContainer} />
    <LogRoute exact path="/users/:userId" component={UserShowContainer} />
    <PlayerContainer />
    
  </div>
);

export default App;