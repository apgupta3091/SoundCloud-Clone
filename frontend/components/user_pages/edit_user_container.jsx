 
import React from "react";
import EditUser from "./edit_user";
import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";

const mSTP = (state, ownProps) => ({
    userId: ownProps.userId,
    user: state.entities.users[ownProps.match.params.userId],
});

const mDTP = dispatch => ({
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
});

export default connect(mSTP, mDTP)(EditUser);