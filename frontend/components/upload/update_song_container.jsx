import React from "react";
import { connect } from "react-redux";
import SongForm from './song_form';
import { updateSong } from '../../actions/song_actions';

const mSTP =  state => ({
    errors: state.errors.song,
    formType: 'Update Song'
});


const mDTP = dispatch => ({
    processForm: song => dispatch(updateSong(song))
});


export default connect(mSTP, mDTP)(SongForm);