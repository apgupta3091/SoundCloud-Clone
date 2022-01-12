import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ currentSong, playing, receiveCurrentSong, playSong, pauseSong, song, songs }) => {
    let display = null;

    if (!songs){
        if(!currentSong){
             display = <div className="play-button-div" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong){
            display = <div className="play-button-div" onClick={() => pauseSong()}>
                        <FontAwesomeIcon className="play-button-icon" icon={faPause}></FontAwesomeIcon>
                      </div>
        }
    
        if(currentSong && currentSong.id !== song.id){
             display = <div className="play-button-div" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong && currentSong.id === song.id && !playing  ){
             display = <div className="play-button-div" onClick={() => playSong()}>
                        <FontAwesomeIcon className="play-button-icon" icon={faPlay}></FontAwesomeIcon>
                       </div>
        }
    } else {
        if(!currentSong){
             display = <div className="play-button-discover" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon-discover" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong){
            display = <div className="play-button-discover" onClick={() => pauseSong()}>
                        <FontAwesomeIcon className="play-button-icon-discover" icon={faPause}></FontAwesomeIcon>
                      </div>
        }
    
        if(currentSong && currentSong.id !== song.id){
             display = <div className="play-button-discover" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon-discover" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong && currentSong.id === song.id && !playing  ){
             display = <div className="play-button-discover" onClick={() => playSong()}>
                        <FontAwesomeIcon className="play-button-icon-discover" icon={faPlay}></FontAwesomeIcon>
                       </div>
        }
    }



    return (
        <div>
            {display}
        </div>
    );
}

export default PlayButton;
