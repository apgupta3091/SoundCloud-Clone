import React from "react";
import { connect } from "react-redux";
import SongShow from './song_show';
import { logout } from '../../actions/session_actions';
import { fetchSong, deleteSong } from '../../actions/song_actions';
import { receiveSong, removeSong, playSong, pauseSong } from '../../actions/play_actions';

const mSTP = (state, ownProps) => ({
    song: state.entities.songs[ownProps.match.params.songId],
    songId: ownProps.match.params.songId,
    currentUser: state.entities.users[state.session.id],
    currentUserId: state.session.id,
    playing: state.ui.play.playing,
    show: state.ui.play.show,
});

const mDTP = dispatch => ({
    logout: () => dispatch(logout()),
    fetchSong: songId => dispatch(fetchSong(songId)),
    deleteSong: songId => dispatch(deleteSong(songId)),
    receiveSong: song => dispatch(receiveSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
    removeSong: () => dispatch(removeSong()),

});

export default connect(mSTP, mDTP)(SongShow);

