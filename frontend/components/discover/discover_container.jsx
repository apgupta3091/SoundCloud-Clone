import React from "react";
import { connect } from "react-redux";
import Discover from './discover';
import { fetchSongs } from '../../actions/song_actions';
import { logout } from '../../actions/session_actions';
import { fetchUsers } from '../../actions/user_actions';

const mSTP = (state, ownProps) => ({
    songs: Object.values(state.entities.songs),
    currentUser: state.entities.users[state.session.id],
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
    users: Object.values(state.entities.users),
});

const mDTP = dispatch => ({
    fetchSongs: () => dispatch(fetchSongs()),
    fetchUsers: () => dispatch(fetchUsers()),
    logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Discover);

