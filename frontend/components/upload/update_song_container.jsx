import React from "react";
import { connect } from "react-redux";
import SongForm from './song_form';
import { updateSong, fetchSong, clearSongErrors } from '../../actions/song_actions';

const mSTP =  (state, ownProps) => ({
    errors: state.errors.song,
    formType: 'Update Song',
    currentUser: state.entities.users[state.session.id],
    song: state.entities.songs[ownProps.match.params.songId],
});


const mDTP = dispatch => ({
    action: song => dispatch(updateSong(song)),
    clearSongErrors: () => dispatch(clearSongErrors()),
    fetchSong: songId => dispatch(fetchSong(songId)),
});


export default connect(mSTP, mDTP)(SongForm);