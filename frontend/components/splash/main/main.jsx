import React from 'react';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.openSigninModal = this.openSigninModal.bind(this);
    }

     openSigninModal(){
            let loginModal = document.querySelector('.login-modal');
            let signupModal = document.querySelector('.signup-modal');
            let overlay = document.querySelector('.overlay');
            let body = document.querySelector('body');
            loginModal.classList.remove('hidden');
            signupModal.classList.add('hidden');
            overlay.classList.remove('hide');
            body.classList.add('grey');
    };

    
    render(){

    
        return (
            <div className="main-container">
                <button className="main-btn" onClick={this.openSigninModal}>UPLOAD YOUR OWN</button>
                <p className="main-p">Hear what's trending now for free in the SoundWave community</p>
            </div>
        );
    }   
}

export default Main;
