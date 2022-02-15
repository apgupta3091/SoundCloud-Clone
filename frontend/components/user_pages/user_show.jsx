import React from "react";
import PlayButtonContainer from "../play_button/play_button_container";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons'
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer'


class UserShow extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props.user,
            ...this.props.songs
        }
    }

    componentDidMount () {
        this.props.fetchUser(this.props.match.params.userId)
        this.props.fetchUserSongs(this.props.match.params.userId);
    }

    componentDidUpdate (prevProps) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.props.fetchUser(this.props.match.params.userId);
            this.props.fetchUserSongs(this.props.match.params.userId);
        }
    }

    render () {

        if (!this.props.user) { return null }
        if (!this.props.songs) { return null }

        const { currentUserId, user, userId, songs } = this.props;

        const userSongs = songs.filter(song => song.artist.id === this.props.user.id)
        const updateProfPicBtn = currentUserId === user.id ? (
            <Link to={`/edit/${currentUserId}`}><button className="update-prof-pic-btn" >
                <FontAwesomeIcon icon={faCameraRetro} /> Update Profile Pic
            </button></Link>
        ) : null

        const nothingHereMsg = userSongs.length === 0 ? (
            <div className="nothing-here-msg">
                This user hasn't uploaded anything yet {`:(`}
            </div>
        ) : null

        return (
            <div >
            <NavBarContainer />
            <h1 className="content">hello</h1>
         
                <div className="user-banner">
                    <div className="profile-pic-div">
                        <img className="user-profile-pic" src={user.profilePic} />
                        {updateProfPicBtn}
                    </div>
                    <div>
                        <h3 className="user-banner-username">{user.username}</h3>
                    </div>
                </div>
                <div className="user-page-under-banner">
                    <div className="user-songs-index-container">
                        {nothingHereMsg}
                        <ul className="user-song-objs">
                            {
                                userSongs.map((song, i) => (
                                    <li className="song-span" key={i}>
                                        <div className="user-song-obj-container">

                                            <Link to={`/songs/${song.id}`}><img className="user-song-cover-img" src={song.coverPhoto} /></Link>

                                            <div className="user-track-obj-top">
                                                 <div className="user-track-player">
                                                   
                                                    <PlayButtonContainer user ={this.props.user} songId={song.id} song={song} />
                                                    <div className="user-track-labels">
                                                        <Link to={`/users/${song.artist.id}`} className="user-track-uploader">{song.artist.username}</Link>
                                                        <Link to={`/songs/${song.id}`} className="user-track-title">{song.title}</Link>
                                                    </div>
                                                </div>
                                            
                                                <div className="user-track-created-time">{song.createdAt} ago</div>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    
                </div>
                <Footer />
            </div>
        )
    }
};

export default UserShow;