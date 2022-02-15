import React from "react";
import NavBarContainer from '../navbar/navbar_container';
import Footer from '../footer/footer';

class SongForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ...this.props.song,
            coverPhoto: null, 
            songFile: null,
            genre: this.props.song.genre || 'select-genre',
            submitted: false,
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handlePhotoFile = this.handlePhotoFile.bind(this);
        this.handleSongFile = this.handleSongFile.bind(this);
        this.handleGenre=this.handleGenre.bind(this);
        this.resetState = this.resetState.bind(this);
        this.updateSubmittedStatus = this.updateSubmittedStatus.bind(this);
    };

    componentDidMount(){
        this.props.clearSongErrors();
    };

     handleGenre(e) {
        this.setState({genre: e.currentTarget.value})
    };

    handleChange(type){
        return e => this.setState({ [type]: e.currentTarget.value });
    };

    handleSongFile(e){
        this.setState({songFile: e.currentTarget.files[0]})
    };

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


    updateSubmittedStatus () {
        this.setState({ ['submitted']: true })
    };

    handleSubmit(e){
        e.preventDefault();
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

        this.props.action(formData).then(this.updateLoading).then(this.resetState).then(this.updateSubmittedStatus)

        this.props.clearSongErrors();
    };

    resetState() {
        if (this.props.formType === 'Create Song') {
            this.setState({
                title: '',
                coverPhoto: null,
                coverPhotoURL: null,
                songFile: null,
                genre: 'select-genre',
                submitted: false,
            });
        };
    };




    render(){
        const { errors, formType } = this.props;
        const success = this.state.submitted  && errors.length === 0 ? ( 
            <div className="success-msg">
                Uploaded!
            </div>
        ) : ( 
            null
        );
        const update = this.state.submitted  && errors.length === 0 ? ( 
            <div className="success-msg">
                Updated!
            </div>
        ) : ( 
            null
        );
        const display = this.props.formType === 'Create Song' ? ( 
            <div className="crud-container">
                <NavBarContainer />
                <h1>Hello</h1>
                {success}
                <div className='upload-song-form'>
                    <h1>{formType}</h1>
                    <ul className="errors-ul">
                    {   
                        errors.length === 0 ? "" : errors.map((error, i) => <li className="errors" key={i}>{`*${error}`}</li>)
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
                            <select value={this.state.genre} name="genre" onChange={this.handleGenre}>
                                <option value="select-genre"  disabled="true">Select Genre</option>
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
        ) : (  
            <div className="crud-container">
                <NavBarContainer />
                <h1>Hello</h1>
                {update}
                <div className='upload-song-form'>
                    <h1>{formType}</h1>
                    <ul className="errors-ul">
                    {   
                        errors.length === 0 ? "" : errors.map((error, i) => <li className="errors" key={i}>{error}</li>)
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
                            <select value={this.state.genre} name="genre" onChange={this.handleGenre}>
                                <option value="select-genre"  disabled="true">Select Genre</option>
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

        return (
            <div>
                {display}
            </div>
        );
    };
};

export default SongForm;