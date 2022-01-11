import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faShuffle, faRefresh, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class Play extends React.Component { 
    constructor(props){
        super(props);
        this.display = this.display.bind(this);
        this.state = {
            playing: this.props.playing,
            show: this.props.show,
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.myRef = React.createRef();
    };

     handlePlay() {
        const audioEl = this.myRef.current;
        console.log(audioEl);
        if (this.state.playing){
            audioEl.pause();
            this.setState({ playing: false })
            this.props.pauseSong();
        } else {
            audioEl.play();
            this.setState({ playing: true })
            this.props.playSong()
        };
    };

    display() {
        return ( 
            this.state.show ? ( 
                <div className="playbar">
                    <FontAwesomeIcon className="playbar-btn" id="playbar-btn-1" icon={faBackward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={this.state.playing ? faPause : faPlay} onClick={this.handlePlay}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faForward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faShuffle}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faRefresh}></FontAwesomeIcon>
                    <p className="start-time">0:00</p>
                    <span className='song-length'></span>
                    <FontAwesomeIcon className="playbar-btn last" icon={faVolumeUp}></FontAwesomeIcon>
                    <audio
                        ref={this.myRef}
                        src={this.props.song.songFile}
                    ></audio>
                    <img className="playbar-song-cover" src={this.props.song.coverPhoto}></img>
                    <div className="playbar-p-flex">
                        <p className="playbar-p">{this.props.song.artist.username}</p>
                        <p className="playbar-p">{this.props.song.title}</p>
                    </div>
                </div>
            ) : ( 
                null
            )
        );
    };

    render(){
        return (
            <div>
                {this.display()}
            </div>
        );
    };
};

export default Play;

