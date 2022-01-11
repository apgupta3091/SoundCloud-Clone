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
        this.progressBarValue =this.progressBarValue.bind(this);
    };

    componentDidMount(){
        const progressBar = document.getElementById('progress-bar')
        this.getDuration(this.props.song.songFile, (length) => {
            let newLength = this.formatDuration(length)
            document.getElementById('duration').textContent= newLength;
            progressBar.max = newLength;
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
            startTime.textContent = this.formatDuration(audioEl.currentTime);
        }, 1000);
    };

    progressBarValue(){
        const audioEl = this.myRef.current;
        const progressBar = document.getElementById('progress-bar')
        progressBar.value = audioEl.currentTime;
    }

    display() {
        const audioEl = this.myRef.current;
        return ( 
            this.state.show ? ( 
                <div className="playbar">
                    <span className="spacer"></span>
                    <FontAwesomeIcon className="playbar-btn" icon={this.state.playing ? faPause : faPlay} onClick={this.handlePlay}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faRefresh} onClick={this.replaySong}></FontAwesomeIcon>
                    <p className="start-time" id="start-time"></p>
                    <div className="progress-bar-div">
                        <input type="range"
                            id="progress-bar"
                            min="0"
                            defaultValue="0"
                            onChange={ e => {
                                audioEl.currentTime = e.target.value;
                            }}
                        />
                    </div>
                    <span id="duration"></span>
                    <FontAwesomeIcon className="playbar-btn last" icon={faVolumeUp}></FontAwesomeIcon>
                    <audio
                        onTimeUpdate={this.progressBarValue}
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

