import React from "react";
import NavBarContainer from "../navbar/navbar_container";
import Footer from '../footer/footer';


class EditUser extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            ...this.props.user,
            profilePic: null,
            profilePicURL: null,
            updated: null
        }

        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ profilePic: file, profilePicURL: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

  

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[id]', this.state.id);
        formData.append('user[profile_pic]', this.state.profilePic);
        this.props.updateUser(formData)
            .then(setTimeout, 2000)
            .then(this.setState({updated : true}))
        
    }

    render() {

        const preview = this.state.profilePicURL ? (
                <img className="profile-pic-preview" src={this.state.profilePicURL} />
            ) : (
                <div className="edit-user-preview-msg">
                    Choose an image to preview it here
                </div>
            )

        const updated = (this.state.updated?
        <h3 className="updated"> Updated!</h3>
        :
        null
        )

        if (!this.props.user) { return null }

        const { user } = this.props;

        return (
            <div className="edit-user-form-container">
            <NavBarContainer />
            <h1 className="hi">hello</h1>
                <div className="top-content">
                    <h3 className="edit-user-username">{user.username}</h3>
                    {updated}
                </div>
                {preview}

                <form onSubmit={this.handleSubmit}>
                    <div className="edit-user-btns">
                        <label className="upload-pic-btn">Choose an image
                            <input type="file"
                                value=""
                                title=" "
                                onChange={this.handleFile}
                            />
                            </label>
                        <div>
                            <button className="edit-user-cancel-btn" >Cancel</button>
                            <button className="edit-user-btn">Save</button>
                        </div>
                    </div>
                </form>
                <Footer />
            </div>
        )
    }

};

export default EditUser;

