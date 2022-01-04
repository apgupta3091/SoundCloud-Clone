import React from "react";
import { connect } from "react-redux";
import SongShow from './song_show';
import { logout } from '../../actions/session_actions';
import { fetchSong } from '../../actions/song_actions';

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId]
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(mSTP, mDTP)(SongShow);

