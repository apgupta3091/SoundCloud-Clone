import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import PlayButtonContainer from '../play_button/play_button_container';
import CommentFormContainer from '../comments/comment_form_container';
import CommentContainer from '../comments/comment_container';

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.song.id);
        window.scrollTo(0, 0);
        this.myRef = React.createRef();

    }
    constructor(props){
        super(props);
        this.state =this.props.song,
        
        this.display = this.display.bind(this);
    };
    display() {
        return(
            this.props.song.artist.id === this.props.currentUserId ? (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <PlayButtonContainer className="song-show-play" song={this.props.song} />
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                    <audio
                        ref={this.myRef}
                        src={this.props.song.songFile}
                    ></audio>

                    <Link to={`/update/${this.state.id}`}><button id="show-edit-btn">Edit Song</button></Link>
                    <Link to="/discover"><button id="show-delete-btn" onClick={() => this.props.deleteSong(this.props.songId)}>Delete Song</button></Link>
                </div>
               {
                    this.props.currentUser?
                <div>
                    <CommentFormContainer currentUser={this.props.currentUser} commentSongId={this.props.songId}/>
                </div>
                :
                null
                }
                <div className='breakpoint'></div>

                <div className='song-show-comment-below-container'>
                    <div className='song-show-comment-profile-container'>
                        <img className='song-show-user-profile-pic' src={this.props.song.artist.profilePic} />
                        <div className='song-show-user-username'>{this.props.song.artist.username}</div>
                    </div>
                    <CommentContainer currentUser={this.props.currentUser}/>
                </div>                
           
                <Footer />
            </div>
            ) : (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <PlayButtonContainer className="song-show-play" song={this.props.song} />
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                    <audio
                        ref={this.myRef}
                        src={this.props.song.songFile}
                    ></audio>
                </div>
                {
                    this.props.currentUser?
                <div>
                    <CommentFormContainer currentUser={this.props.currentUser} commentSongId={this.props.songId}/>
                </div>
                :
                null
                }
                <div className='breakpoint'></div>

                <div className='song-show-comment-below-container'>
                    <div className='song-show-comment-profile-container'>
                        <img className='song-show-user-profile-pic' src={this.props.song.artist.profilePic} />
                        <div className='song-show-user-username'>{this.props.song.artist.username}</div>
                    </div>
                    <CommentContainer currentUser={this.props.currentUser}/>
                </div>                
                <Footer />
            </div>
            )
        );
    };
    
    render() {
        if (!this.props.song) { return null }
         return (
            <div>
                {this.display()}
            </div>
        );
    };
        
};


export default SongShow;