import React from "react";
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class SongForm extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.song;
        this.handleSubmit=this.handleSubmit.bind(this);
    };

    componentDidMount(){
        this.props.clearSongErrors();
    };

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.action(this.state);
    };

    render(){

        const { errors, formType } = this.props;
        return (
            <div>
                <NavBarContainer />
                <h1>Hello</h1>
                
                <div className='upload-song-form'>
                    <h1>{formType}</h1>
                    <ul>
                    {
                        errors.length === 0 ? "" : errors.map(error => <li>{error}</li>)
                    }
                </ul>
                    <form className="upload-song-form-form" onSubmit={this.handleSubmit}>
                        
                        <label>Title
                            <input
                                type="text"
                                value={this.state.title}
                                name="song[title]"
                                onChange={this.handleChange('title')}
                            ></input>
                        </label>
                        <label>Genre
                            <select value={this.state.genre} name="song[genre]" onChange={this.handleChange('genre')}>
                                <option value="choose genre" disabled>Select Genre</option>
                                <option value='edm'>edm</option>
                                <option value='hip-hop'>hip-hop</option>
                                <option value='pop'>pop</option>
                            </select>
                        </label>
                        <label>Choose a cover pic
                            <input
                                type="file"
                                name="song[cover_photo]"
                                onChange={this.handleChange('cover_photo')}
                            ></input>
                        </label>
                        <label>Choose a mp3 file
                            <input
                                type="file"
                                name="song[song_file]"
                                onChange={this.handleChange('song_file')}
                            ></input>
                        </label>
                        <button>{formType}</button>
                    </form>
                </div>
                <Footer />
            </div>
        );
    };
};

export default SongForm;