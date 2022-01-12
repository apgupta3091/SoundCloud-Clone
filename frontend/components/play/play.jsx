import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faRefresh, faVolumeUp } from '@fortawesome/free-solid-svg-icons'


class Play extends React.Component { 
    constructor(props){
        super(props);
        this.state = {
            startTime: 0,
            volume: 0.5,
        }
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
        this.replaySong = this.replaySong.bind(this);
        this.getDuration = this.getDuration.bind(this);
        this.formatDuration = this.formatDuration.bind(this);
        this.updateTimer = this.updateTimer.bind(this);
        this.progressBarValue =this.progressBarValue.bind(this)
        this.updateVolume = this.updateVolume.bind(this);
    };

    componentDidUpdate() {
        if (this.props.playing) {
            let audioEl = document.getElementById("audio-el");
            audioEl.play();
            this.updateTimer();
        } if (this.props.currentSong) {
            const progressBar = document.getElementById('progress-bar')
            this.getDuration(this.props.song.songFile, (length) => {
             let newLength = this.formatDuration(length)
             document.getElementById('duration').textContent= newLength;
             progressBar.max = newLength;
            })
         
            if (!this.props.playing) {
            let audioEl = document.getElementById("audio-el");
            audioEl.pause();
            }
        }
        
    }

    play(){
        let audioEl = document.getElementById('audio-el');
        console.log(audioEl)
        this.props.playSong();
        audioEl.play();
    };
    
    pause(){
        let audioEl = document.getElementById('audio-el');
        console.log(audioEl)
        this.props.pauseSong();
    };

    replaySong() {
        let audioEl = document.getElementById('audio-el');
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
        let audioEl = document.getElementById('audio-el');
        const startTime = document.getElementById('start-time')
        setInterval(() => {
            startTime.textContent = this.formatDuration(audioEl.currentTime);
        }, 1000);
    };

    progressBarValue(){
        const audioEl = document.getElementById('audio-el');
        const progressBar = document.getElementById('progress-bar')
        progressBar.value = audioEl.currentTime;
    }

    updateVolume(e){
        const audioEl = document.getElementById('audio-el');
        this.setState({ volume: e.target.value })
        audioEl.volume = this.state.volume;
    };

    render(){
        let audioEl = document.getElementById('audio-el');

        if (!this.props.currentSong) return null;

        let display = this.props.playing ? (
            <FontAwesomeIcon id="playbar-play-icon" className="playbar-btn" icon={faPause} onClick={this.pause}></FontAwesomeIcon> 
        ) : (
            <FontAwesomeIcon id="playbar-play-icon" className="playbar-btn" icon={faPlay} onClick={this.play}></FontAwesomeIcon>
        );

        return (
            <div className="playbar">
                    <span className="spacer"></span>
                    {display}
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
                    <div className="volume">
                        <FontAwesomeIcon className="playbar-btn last" id="volume-icon" icon={faVolumeUp}></FontAwesomeIcon>
                        <input type="range"
                            className="volume-bar"
                            min="0"
                            max="1"
                            step="0.1"
                            value={this.state.volume}
                            onChange={e => this.updateVolume(e)}
                        />
                    </div>
                    <audio
                        id="audio-el"
                        onTimeUpdate={this.progressBarValue}
                        src={this.props.song.songFile}
                    ></audio>
                    <img className="playbar-song-cover" src={this.props.song.coverPhoto}></img>
                    <div className="playbar-p-flex">
                        <p className="playbar-p">{this.props.song.artist.username}</p>
                        <p className="playbar-p">{this.props.song.title}</p>
                    </div>
                </div>
        );
    };
};

export default Play;

