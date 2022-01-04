import React from 'react';
import NavBarContainer from '../navbar/navbar_container';

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.song.id)
    }
    constructor(props){
        super(props);
        this.state = this.props.song 
    };

    
    
    render() {
         return (
            <div className="main">
                <NavBarContainer /> 
                <h1>hello</h1>
                <h1>{this.state.title}</h1>
                <p>{this.state.uploader.username}</p>
                <p>{this.state.genre}</p>
                <p>{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                <img className="show-img" src={this.state.coverPhoto}></img> 
            </div>
        );
    };
        
};


export default SongShow;