import { RECEIVE_SONG_ERRORS, CLEAR_SONG_ERRORS } from "../actions/song_actions";

const songErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SONG_ERRORS:
            return [];
        case CLEAR_SONG_ERRORS:
            return [];
        default:
            return state;
    };
};

export default songErrorsReducer;