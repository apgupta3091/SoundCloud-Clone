import { RECEIVE_SONG, REMOVE_SONG, PLAY_SONG, PAUSE_SONG } from '../actions/play_actions';

const defaultState = {
    currentSong: null,
    playing: false,
    show: false,
};

const playReducer = (oldState=defaultState, action) => {
    Object.freeze(oldState);
    const nextState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_SONG:
            nextState["currentSong"] = action.song;
            nextState["playing"] = false;
            return nextState;
        case REMOVE_SONG:
            return oldState;
        case PLAY_SONG:
            nextState["playing"] = true;
            nextState["show"] = true;
            return nextState;
        case PAUSE_SONG:
            nextState["playing"] = false;
            return nextState;
        default:
            return oldState;
    };
};

export default playReducer;