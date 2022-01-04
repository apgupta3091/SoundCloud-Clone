import React from "react";
import { connect } from "react-redux";
import Discover from './discover';
import { fetchSong } from '../../actions/song_actions'

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId],
    currentUser: state.entities.users[state.session.id],
});

const mDTP = dispatch => ({
    fetchSong: songId => dispatch(fetchSong(songId))
});

export default connect(mSTP, mDTP)(Discover);

