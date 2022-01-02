import React from 'react';


class Main extends React.Component {
    constructor(props){
        super(props);
        this.openSigninModal = this.openSigninModal.bind(this);
    }

     openSigninModal(){
            let loginModal = document.querySelector('.login-modal');
            let signupModal = document.querySelector('.signup-modal');
            loginModal.classList.remove('hidden');
            signupModal.classList.add('hidden');
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
