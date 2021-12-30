import React from "react";
import { connect } from "react-redux";
import SessionForm from './session_form';
import { login } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    errors: state.errors.session,
    formType: 'login',
});

const mDTP = (dispatch, ownProps) => ({
    processForm: formUser => dispatch(login(formUser))
});

export default connect(mSTP, mDTP)(SessionForm);