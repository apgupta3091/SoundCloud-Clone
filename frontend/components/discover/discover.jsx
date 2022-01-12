import React from "react";
import Footer from '../footer/footer';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faThemeisle } from "@fortawesome/free-brands-svg-icons";
import PlayContainer from '../play/play_container';
import Play from "../play/play";


class Discover extends React.Component {
    constructor(props){
        super(props);

    };

    componentDidMount(){
        setTimeout(() => this.props.fetchSongs(), 2000);
    };

    render(){
        const { songs } =  this.props;
        let edmSongs = songs.filter(song => song.genre ==='edm')
        let hiphopSongs = songs.filter(song => song.genre ==='hip-hop')
        let popSongs = songs.filter(song => song.genre ==='pop')
        let songsCopy = songs.slice();
        let reverseSongs = songsCopy.reverse();
        let newSongs = [];
        for (let i = 0; i < 10; i++){
            newSongs.push(reverseSongs[i]);
        };

       

        return(
            <div>
                <NavBarContainer />
                <h1>hello</h1>
                <div>
                    <h1 className="discover-h1">All Songs</h1>
                    <p className="discover-p">Every song available on SoundWave</p>
                     <ul className="songs-list discover-song-list">
                        {
                            songs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto} ></img>
                                            {/* <FontAwesomeIcon className="song-discover-play hidden" id="list1" icon={faPlay}></FontAwesomeIcon> */}
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                    <h1 className="discover-h1">Charts: New & hot</h1>
                    <p className="discover-p">Top 10 newest songs on SoundWave</p>
                     <ul className="songs-list discover-song-list">
                        {
                            newSongs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                            {/* <FontAwesomeIcon className="song-discover-play hidden" icon={faPlay}></FontAwesomeIcon> */}
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                    <h1 className="discover-h1">EDM</h1>
                    <p className="discover-p">The latest and hottest EDM</p>
                    <ul className="songs-list discover-song-list">
                        {
                            edmSongs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                            {/* <FontAwesomeIcon className="song-discover-play hidden" icon={faPlay}></FontAwesomeIcon> */}
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                    <h1 className="discover-h1">Hip-Hop</h1>
                    <p className="discover-p">The latest and hottest Hip-Hop</p>
                    <ul className="songs-list discover-song-list">
                        {
                            hiphopSongs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                            {/* <FontAwesomeIcon className="song-discover-play hidden" icon={faPlay}></FontAwesomeIcon> */}
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                    <h1 className="discover-h1">Pop</h1>
                    <p className="discover-p">The latest and hottest Pop</p>
                    <ul className="songs-list discover-song-list" id="discover-song-list-last">
                        {
                            popSongs.map(song => (
                                song ?
                                (<span key={song.id}>
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                            {/* <FontAwesomeIcon className="song-discover-play hidden" icon={faPlay}></FontAwesomeIcon> */}
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>

                                </span>): null
                            ))
                        }
                    </ul>
                </div>
                <Footer />

            </div>
        );
    };
};

export default Discover;