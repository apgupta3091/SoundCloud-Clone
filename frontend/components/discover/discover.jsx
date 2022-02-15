import React from "react";
import Footer from '../footer/footer';
import NavBarContainer from '../navbar/navbar_container';
import { Link } from "react-router-dom";
import PlayButtonContainer from '../play_button/play_button_container';


class Discover extends React.Component {
    constructor(props){
        super(props);

    };

    componentDidMount(){
        setTimeout(() => this.props.fetchSongs(), 2000);
        setTimeout(() => this.props.fetchUsers(), 2000);
    };

    render(){
        const { songs, users } =  this.props;
        let edmSongs = songs.filter(song => song.genre ==='edm')
        let hiphopSongs = songs.filter(song => song.genre ==='hip-hop')
        let popSongs = songs.filter(song => song.genre ==='pop')
        let songsCopy = songs.slice();
        let reverseSongs = songsCopy.reverse();
        let newSongs = [];
        for (let i = 0; i < 10; i++){
            newSongs.push(reverseSongs[i]);
        };
        let mySongs = songs.filter(song => song.artist.id === this.props.currentUser.id)

        return(
            <div>
                <NavBarContainer />
                <h1>hello</h1>
                
                <div>
                    <h1 className="discover-h1">All Users</h1>
                    <p className="discover-p">All current Users on SoundWave</p>
                     <ul className="songs-list discover-song-list">
                        {
                            users.map(song => (
                                song ?
                                (<span key={song.id} className="song-span">
                                    <Link className="song-links" to={`/users/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.profilePic} ></img>
                                        </li>
                                        <p className="song-title">{song.username}</p>
                                    </Link>
                                    

                                </span>): null
                            ))
                        }
                    </ul>
                    <h1 className="discover-h1">All Songs</h1>
                    <p className="discover-p">Every song available on SoundWave</p>
                     <ul className="songs-list discover-song-list">
                        {
                            songs.map(song => (
                                song ?
                                (<span key={song.id} className="song-span">
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto} ></img>
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>
                                    <PlayButtonContainer songs={songs} song={song} />

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
                                (<span key={song.id} className="song-span">
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>
                                    <PlayButtonContainer songs={songs} song={song} />

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
                                (<span key={song.id} className="song-span">
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>
                                    <PlayButtonContainer songs={songs} song={song} />

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
                                (<span key={song.id} className="song-span">
                                    <Link className="song-links" to={`/songs/${song.id}`}>
                                        <li>
                                            <img className="song-cover-photo" src={song.coverPhoto}></img>
                                        </li>
                                        <p className="song-title">{song.title}</p>
                                        <p className="song-artist">{song.artist.username}</p>
                                    </Link>
                                    <PlayButtonContainer songs={songs} song={song} />

                                </span>): null
                            ))
                        }
                    </ul>
                </div>
                {/* <PlayContainer song={this.props.song}/> */}
                <Footer />

            </div>
        );
    };
};

export default Discover;