import React from "react";
import { connect } from "react-redux";
import SongForm from './song_form';
import { createSong } from '../../actions/song_actions';
import { clearSongErrors } from "../../actions/song_actions";

const mSTP =  state => ({
    errors: state.errors.song,
    currentUser: state.entities.users[state.session.id],
    formType: 'Create Song',
    song: {
        title:'',
        artist_id: state.session.id,
    },
});


const mDTP = dispatch => ({
    action: song => dispatch(createSong(song)),
    clearSongErrors: () => dispatch(clearSongErrors())
});


export default connect(mSTP, mDTP)(SongForm);