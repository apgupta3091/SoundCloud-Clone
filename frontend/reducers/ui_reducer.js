import { combineReducers } from "redux";
import playReducer from './play_reducer';

const uiReducer = combineReducers({
    play: playReducer,
});

export default uiReducer;