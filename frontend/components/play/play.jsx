import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward, faShuffle, faRefresh, faVolumeUp } from '@fortawesome/free-solid-svg-icons'

class Play extends React.Component { 
    constructor(props){
        super(props);
        this.display = this.display.bind(this);
        this.state = {
            playing: this.props.playing,
        }
    };

    display() {
        return ( 
            this.state.playing ? ( 
                <div className="playbar">
                    <FontAwesomeIcon className="playbar-btn" id="playbar-btn-1" icon={faBackward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={this.state.playing ? faPause : faPlay}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faForward}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faShuffle}></FontAwesomeIcon>
                    <FontAwesomeIcon className="playbar-btn" icon={faRefresh}></FontAwesomeIcon>
                    <p>0:00</p>
                    <span className='song-length'></span>
                    <FontAwesomeIcon className="playbar-btn last" icon={faVolumeUp}></FontAwesomeIcon>
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

