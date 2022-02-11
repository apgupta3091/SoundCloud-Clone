import { RECEIVE_SONG } from '../actions/song_actions';
import {
    CLEAR_COMMENTS_FROM_STATE,
    RECEIVE_COMMENT,
    REMOVE_COMMENT
} from '../actions/comment_actions';

const commentsReducer = (state={}, action) => {
    Object.freeze(state);
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_SONG:
            if (action.song.comments) {
                return action.song.comments
            } else {
                return {}
            };
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.commentId]
            return nextState;
        case CLEAR_COMMENTS_FROM_STATE:
            return {};
        default:
            return state;
    }
};

export default commentsReducer;