import React from "react";
import LoginContainer from '../session/login_container'
import SignupContainer from '../session/signup_container';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.display = this.display.bind(this);
        this.openSigninModal = this.openSigninModal.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
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

    display() {
        return(

            this.props.currentUser ? (
            <div>
                <p>Hello, {this.props.currentUser.username}</p>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
            ) : (
            <div>
                <button id="sign-in" onClick={this.openSigninModal}>Sign in</button>
                <button id='sign-up' onClick={this.openSignupModal}>Create account</button>
                <div className="login-modal hidden">
                    <LoginContainer />
                </div>
                <div className="signup-modal hidden">
                    <SignupContainer />
                </div>               
            </div>
            )
        )
    };

    render(){
        
        return(
            <div>
                {this.display()}
            </div>
        );
    };
};

export default Greeting;