import React from "react";
import { connect } from "react-redux";
import SongForm from './song_form';
import { createSong } from '../../actions/song_actions';

const mSTP =  state => ({
    errors: state.errors.song,
    formType: 'Create Song'
});


const mDTP = dispatch => ({
    processForm: song => dispatch(createSong(song))
});


export default connect(mSTP, mDTP)(SongForm);