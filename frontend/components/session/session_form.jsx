import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
        this.openSigninModal = this.openSigninModal.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user =  Object.assign({}, this.state);
        this.props.processForm(user);
    };

    link(){
        return this.props.formType === 'Create account' ? 'Sign in' : 'Create account';
    };

      handleInput(type){
        return (e) => this.setState({ [type]: e.target.value });
    };

     openSigninModal() {
        let loginModal = document.querySelector('.login-modal');
        let signupModal = document.querySelector('.signup-modal');
        loginModal.classList.remove('hidden');
        signupModal.classList.add('hidden');
    };

    openSignupModal() {
        let loginModal = document.querySelector('.login-modal');
        let signupModal = document.querySelector('.signup-modal');
        signupModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
    };

    toggleForm(){
        if (this.props.formType === 'Create account') {
            return this.openSigninModal();
        } else {
            return this.openSignupModal();
        };
    };

    render() {
        return (
            <div>
                
                <h2>{this.props.formType}</h2>
                
                <ul>
                    {
                        this.props.errors.map((error, idx) => <p key={idx}>{error}</p>)
                    }
                </ul>
                <form>
                <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        ></input>
                    </label>
                    <br></br>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        ></input>
                    </label>
                    <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        ></input>
                    </label>
                    <br></br>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
                {
                    
                }
                <button onClick={this.toggleForm}>{this.link()}</button>
            </div>
        );
    };
};

export default SessionForm