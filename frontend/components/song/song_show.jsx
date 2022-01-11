import React from 'react';
import NavBarContainer from '../navbar/navbar_container';
import PlayContainer from '../play/play_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.song.id);
        window.scrollTo(0, 0);
        this.handlePlay = this.handlePlay.bind(this);
    }
    constructor(props){
        super(props);
        this.state = {
            ...this.props.song,
            playing: this.props.playing,
        }
        this.display = this.display.bind(this);
    };

    handlePlay() {
        if (this.state.playing){
            this.setState({ playing: false })
            this.props.pauseSong();
        } else {
            this.setState({ playing: true })
            this.props.playSong()
        };
    };

    

    display() {
        return(
            this.props.song.artist.id === this.props.currentUserId ? (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <FontAwesomeIcon className="song-show-play" icon={this.state.playing? faPause : faPlay} onClick={this.handlePlay}></FontAwesomeIcon>
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                </div>
                <Link to={`/update/${this.state.id}`}><button id="show-edit-btn">Edit Song</button></Link>
                <Link to="/discover"><button id="show-delete-btn" onClick={() => this.props.deleteSong(this.props.songId)}>Delete Song</button></Link>
                {
                    this.state.playing ? <PlayContainer /> :  null
                }
                <Footer />
            </div>
            ) : (
            <div>
                <NavBarContainer /> 
                <div className="show-context">
                    <h1>hello</h1>
                    <FontAwesomeIcon className="song-show-play" icon={this.state.playing? faPause : faPlay} onClick={this.handlePlay}></FontAwesomeIcon>
                    <div className="song-show-content-title-uploader">
                        <h1 className="song-show-title">{this.state.title}</h1>
                        <p className="song-show-date">{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                    </div>
                    <div className="song-show-content-genre-date">
                        <p className="song-show-uploader">{this.state.artist.username}</p>
                        <p className="song-show-genre">#{this.state.genre}</p>
                    </div>
                    <img className="show-img" src={this.state.coverPhoto}></img> 
                </div>
                {
                    this.state.playing ? <PlayContainer /> :  null
                }
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
                <h1>hello</h1>
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