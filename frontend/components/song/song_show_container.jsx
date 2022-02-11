import React from "react";
import { connect } from "react-redux";
import SongShow from './song_show';
import { logout } from '../../actions/session_actions';
import { fetchSong, deleteSong } from '../../actions/song_actions';

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId],
    songId: ownProps.match.params.songId,
    currentUser: state.entities.users[state.session.id],
    currentUserProfilePic: state.entities.users[state.session.id].profilePic,
    currentUserId: state.session.id,
    currentUserProfilePic: state.entities.users[state.session.id].profilePic,
    currentSong: state.ui.play.currentSong

});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSong: songId => dispatch(fetchSong(songId)),
    deleteSong: songId => dispatch(deleteSong(songId)),

});

export default connect(mSTP, mDTP)(SongShow);

