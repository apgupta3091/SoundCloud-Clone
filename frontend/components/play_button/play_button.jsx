import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const PlayButton = ({ currentSong, playing, receiveCurrentSong, playSong, pauseSong, song, songs, user }) => {
    let display = null;

    if (user){
        if(!currentSong){
             display = <div className="play-button-user" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon-user" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong){
            display = <div className="play-button-user" onClick={() => pauseSong()}>
                        <FontAwesomeIcon className="play-button-icon-user" icon={faPause}></FontAwesomeIcon>
                      </div>
        }
    
        if(currentSong && currentSong.id !== song.id){
             display = <div className="play-button-user" onClick={() => receiveCurrentSong(song)}>
                        <FontAwesomeIcon className="play-button-icon-user" icon={faPlay}></FontAwesomeIcon>
                       </div>
        } else if (currentSong && currentSong.id === song.id && !playing  ){
             display = <div className="play-button-user" onClick={() => playSong()}>
                        <FontAwesomeIcon className="play-button-icon-user" icon={faPlay}></FontAwesomeIcon>
                       </div>
        }
    }

    else if (!songs){
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
        <>
            {display}
        </>
    );
}

export default PlayButton;
