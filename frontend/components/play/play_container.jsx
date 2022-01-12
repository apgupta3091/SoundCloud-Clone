import React from "react";
import { connect } from "react-redux";
import Play from './play';
import { receiveCurrentSong, removeSong, playSong, pauseSong } from '../../actions/play_actions';


const mSTP = state => ({
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
});

const mDTP = (dispatch) => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    removeSong: () => dispatch(removeSong()),
});

export default connect(mSTP, mDTP)(Play);