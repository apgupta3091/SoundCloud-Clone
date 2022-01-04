import React from "react";
import LoginContainer from '../../session/login_container'
import SignupContainer from '../../session/signup_container';
import MainContainer from '../main/main_container';
import Footer from '../../footer/footer';
import { $CombinedState } from "redux";


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
        let overlay = document.querySelector('.overlay');
        let body = document.querySelector('body');
        loginModal.classList.remove('hidden');
        signupModal.classList.add('hidden');
        overlay.classList.remove('hide');
        body.classList.add('grey');
    };

    openSignupModal() {
        let loginModal = document.querySelector('.login-modal');
        let signupModal = document.querySelector('.signup-modal');
        let body = document.querySelector('body');
        let overlay = document.querySelector('.overlay');
        signupModal.classList.remove('hidden');
        loginModal.classList.add('hidden');
        overlay.classList.remove('hide');
        body.classList.add('grey');
    };



    display() {
        return(

            this.props.currentUser ? (
            <div>
                <p>Hello, {this.props.currentUser.username}</p>
                <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
                <Footer />
            </div>
            ) : (
            <div className="top" >
                <h1 className="logo">SOUNDWAVE</h1>
]                <button id="sign-in" onClick={this.openSigninModal}>Sign in</button>
                <button id='sign-up' onClick={this.openSignupModal}>Create account</button>
                <img className="main-img" src={window.mainURL} alt="logo" />
                <h1 className="main-h1">What's next in music is first in SoundWave</h1>
                <div className="modal login-modal hidden" id="login-modal">
                    <LoginContainer />
                </div>
                <div className="modal signup-modal hidden" id="signup-modal">
                    <SignupContainer />
                </div> 
                <MainContainer />
                <Footer />              
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