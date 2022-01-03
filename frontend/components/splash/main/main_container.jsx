import React from "react";
import { connect } from "react-redux";
import Main from './main';
import { fetchSongs } from '../../../actions/song_actions'

const mSTP = (state, ownProps) => ({
    songs: state.entities.songs
});

const mDTP = (dispatch, ownProps) => ({
    fetchSongs: () => dispatch(fetchSongs())
});

export default connect(mSTP, mDTP)(Main);