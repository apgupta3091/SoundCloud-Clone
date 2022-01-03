import React from "react";
import { connect } from "react-redux";
import Main from './main';

// const mSTP = (state, ownProps) => ({
//     errors: state.errors.session,
// });

// const mDTP = (dispatch, ownProps) => ({
//     processForm: formUser => dispatch(login(formUser))
// });

export default connect(null, null)(Main);