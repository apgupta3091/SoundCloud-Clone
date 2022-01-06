import React from 'react';
import { Link } from 'react-router-dom';

class Main extends React.Component {
    constructor(props){
        super(props);
        this.openSigninModal = this.openSigninModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchSongs();
    };

     openSigninModal(){
            let loginModal = document.querySelector('.login-modal');
            let signupModal = document.querySelector('.signup-modal');
            let overlay = document.querySelector('.overlay');
            let body = document.querySelector('body');
            loginModal.classList.remove('hidden');
            signupModal.classList.add('hidden');
            overlay.classList.remove('hide');
            body.classList.add('grey');
    };

    
    render(){
        const { songs, allSongs } =  this.props;
        const splashSongs =[];
        for (let i = 0; i < 12; i++){
            splashSongs.push(allSongs[i]);
        };
        return (
            <div className="main-container">
                <button className="main-btn" onClick={this.openSigninModal}>UPLOAD YOUR OWN</button>
                <p className="main-p">Hear what's trending now for free in the SoundWave community</p>
                <div>
                    <ul className="songs-list">
                        {
                            splashSongs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }   
}

export default Main;
