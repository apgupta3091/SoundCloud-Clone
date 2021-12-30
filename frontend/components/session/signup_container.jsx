import React from "react";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Create account',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(signup(formUser))
});

export default connect(mSTP, mDTP)(SessionForm);