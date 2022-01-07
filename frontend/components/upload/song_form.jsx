import React from "react";
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class SongForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.song,
            coverPhoto: this.props.song.coverPhoto || null, 
            songFile: this.props.song.songFile || null, 
            genre: this.props.song.genre || 'edm',
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
        this.handleGenre=this.handleGenre.bind(this);
        this.resetState = this.resetState.bind(this);
    };

    componentDidMount(){
        this.props.clearSongErrors();
    };

     handleGenre(e) {
        this.setState({genre: e.currentTarget.value})
    }

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value });
    }

    handlePhotoFile(e){
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ coverPhoto: file, coverPhotoURL: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        };
    };

    handleSongFile(e){
        this.setState({songFile: e.currentTarget.files[0]})
    };

    handleSubmit(e){
        const formData = new FormData();
        formData.append('song[id]', this.state.id);
        formData.append('song[title]', this.state.title);
        formData.append('song[genre]', this.state.genre);
        if (this.state.coverPhoto) {
            formData.append('song[cover_photo]', this.state.coverPhoto);
        } 
        if (this.state.songFile) {
            formData.append('song[song_file]', this.state.songFile);
        };        

        this.props.action(formData).then(this.resetState);
        this.props.clearSongErrors();
        if (this.state.title && this.state.coverPhoto && this.state.songFile){
            setTimeout(() => this.props.history.push('/discover'), 5000);
        } 

    };

    

    resetState() {
        if (this.props.formType === 'Create Song') {
            this.setState({
                title: '',
                coverPhoto: null,
                coverPhotoURL: null,
                songFile: null,
                genre: 'edm'
            });
        };
    };


    render(){
        const { errors, formType } = this.props;
        const errorsArr = errors.slice();  
        errorsArr.push("Cover photo and Mp3 file will default if left blank")
        return (
            <div>
                <NavBarContainer />
                <h1>Hello</h1>
                <div className='upload-song-form'>
                    <h1>{formType}</h1>
                    <ul className="errors-ul">
                    {   
                        errors.length === 0 ? "" : errorsArr.map((error, i) => <li className="errors" key={i}>{error}</li>)
                    }
                    </ul>
                    <form className="upload-song-form-form" onSubmit={this.handleSubmit}>
                        
                        <label>Title
                            <input
                                type="text"
                                value={this.state.title}
                                onChange={this.handleChange('title')}
                            ></input>
                        </label>
                        <label>Genre
                            <select value={this.state.genre ? this.state.genre : 'select-genre'} onChange={this.handleGenre}>
                                <option value="select genre" disabled>Select Genre</option>
                                <option value='edm'>edm</option>
                                <option value='hip-hop'>hip-hop</option>
                                <option value='pop'>pop</option>
                            </select>
                        </label>
                        <label>Choose a cover pic
                            <input
                                type="file"
                                onChange={this.handlePhotoFile}
                            ></input>
                        </label>
                        <label>Choose a mp3 file
                            <input
                                type="file"
                                onChange={this.handleSongFile}
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