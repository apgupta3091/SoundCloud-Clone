import { connect } from 'react-redux';
import PlayButton from './play_button';
import { receiveCurrentSong, playSong, pauseSong } from '../../actions/play_actions';

const mSTP = state => ({
    currentSong: state.ui.play.currentSong,
    playing: state.ui.play.playing,
});

const mDTP = dispatch => ({
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song)),
    playSong: () => dispatch(playSong()),
    pauseSong: () => dispatch(pauseSong()),
});

export default connect(mSTP, mDTP)(PlayButton);