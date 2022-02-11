import { connect } from "react-redux";
import Comment from "./comment";
import { deleteComment } from "../../actions/comment_actions";

const mSTP = state => ({
    comments: Object.values(state.entities.comments),
});

const mDTP = dispatch => ({
    deleteComment: commentId => dispatch(deleteComment(commentId))
});

export default connect(mSTP, mDTP)(Comment);