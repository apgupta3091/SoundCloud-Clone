import React from 'react';

class SongShow extends React.Component {
    componentDidMount() {
        this.props.fetchSong(this.props.song.id)
    }
    constructor(props){
        super(props);
        this.state = this.props.song;
    };


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>{this.state.uploader.username}</p>
                <p>{this.state.genre}</p>
                <p>{this.state.createdAt.includes("about") ? this.state.createdAt.slice(6) : this.state.createdAt} ago</p>
                <img src={this.state.coverPhoto}></img>
            </div>
        );
    };
};

export default SongShow;