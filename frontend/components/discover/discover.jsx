import React from "react";
import Footer from '../footer/footer';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from "react-router-dom";

class Discover extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        const { songs } =  this.props;
        let edmSongs = songs.filter(song => song.genre ==='edm')
        let hiphopSongs = songs.filter(song => song.genre ==='hip-hop')
        let popSongs = songs.filter(song => song.genre ==='pop')
        return(
            <div>
                <NavBarContainer />
                <h1>hello</h1>
                <div>
                    <h1 className="discover-h1">All Songs</h1>
                     <ul className="songs-list discover-song-list">
                        {
                            songs.map(song => (
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
                    <h1 className="discover-h1">EDM</h1>
                    <ul className="songs-list discover-song-list">
                        {
                            edmSongs.map(song => (
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
                    <h1 className="discover-h1">Hip-Hop</h1>
                    <ul className="songs-list discover-song-list">
                        {
                            hiphopSongs.map(song => (
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
                    <h1 className="discover-h1">Pop</h1>
                    <ul className="songs-list discover-song-list" id="discover-song-list-last">
                        {
                            popSongs.map(song => (
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
                <Footer />
            </div>
        );
    };
};

export default Discover;