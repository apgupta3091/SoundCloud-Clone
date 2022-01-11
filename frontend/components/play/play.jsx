import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faShuffle, faRefresh, faVolumeUp } from '@fortawesome/free-solid-svg-icons'
import { $CombinedState, combineReducers } from 'redux';

class Play extends React.Component { 
    constructor(props){
        super(props);
        this.display = this.display.bind(this);
        this.state = {
            playing: this.props.playing,
            show: this.props.show,
            startTime: 0
        }
        this.handlePlay = this.handlePlay.bind(this);
        this.myRef = React.createRef();
        this.replaySong = this.replaySong.bind(this);
        this.getDuration = this.getDuration.bind(this);
        this.formatDuration = this.formatDuration.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
    };

    componentDidMount(){
        this.getDuration(this.props.song.songFile, (length) => {
            let newLength = this.formatDuration(length)
            document.getElementById('duration').textContent= newLength;
        })
        this.updateTimer();
    }

    componentDidUpdate(){
        this.updateTimer();
    }

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

    replaySong() {
        const audioEl = this.myRef.current;
        audioEl.currentTime = 0;
        audioEl.play();
    }

    getDuration(src, cb) {
        let audio = new Audio();
        $(audio).on("loadedmetadata", function() {
            cb(audio.duration);
        });
        audio.src=src
    }

    formatDuration(duration) {
        if (Math.floor(duration % 60) < 10) {
            return `${Math.floor(duration / 60)}:0${Math.floor(duration) % 60}`
        } else {
            return `${Math.floor(duration / 60)}:${Math.floor(duration) % 60}`
        } 
    }

    updateTimer () {
        const audioEl = this.myRef.current;
        const startTime = document.getElementById('start-time')
        setInterval(() => {
            startTime.textContent = this.formatDuration(audioEl.currentTime)
        }, 1000);
    };

    display() {
        const audioEl = this.myRef.current;
        return ( 
            this.state.show ? ( 
                <div className="playbar">
                    <FontAwesomeIcon className="playbar-btn" id="playbar-btn-1" icon={faBackward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={this.state.playing ? faPause : faPlay} onClick={this.handlePlay}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faForward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faShuffle}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faRefresh} onClick={this.replaySong}></FontAwesomeIcon>
                    <p className="start-time" id="start-time"></p>
                    <span className='song-length'></span>
                    <span id="duration"></span>
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

