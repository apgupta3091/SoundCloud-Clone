import React from "react";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'Sign in',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(login(formUser)),
    loginGuest: guest => dispatch(login(guest)),
   
});

export default connect(mSTP, mDTP)(SessionForm);