import React from "react";
import { connect } from "react-redux";
import Play from './play';
import { receiveSong, removeSong, playSong, pauseSong } from '../../actions/play_actions';


const mSTP = state => ({
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
    show: state.ui.play.show,
});

const mDTP = (dispatch) => ({
    receiveSong: song => dispatch(receiveSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    removeSong: () => dispatch(removeSong()),
});

export default connect(mSTP, mDTP)(Play);