import { connect } from "react-redux";
import { fetchUser, updateUser } from "../../actions/user_actions";
import { fetchUserSongs } from "../../actions/song_actions";
import { receiveCurrentSong } from "../../actions/play_actions";

import UserShow from "./user_show";

const mSTP = (state, ownProps) => ({
    currentUserId: state.session.id,
    user: state.entities.users[ownProps.match.params.userId],
    userId: ownProps.match.params.userId,
    songs: Object.values(state.entities.songs)
});

const mDTP = dispatch => ({
    fetchUserSongs: userId => dispatch(fetchUserSongs(userId)),
    fetchUser: userId => dispatch(fetchUser(userId)),
    updateUser: user => dispatch(updateUser(user)),
    receiveCurrentSong: song => dispatch(receiveCurrentSong(song))
    
});

export default connect(mSTP, mDTP)(UserShow);