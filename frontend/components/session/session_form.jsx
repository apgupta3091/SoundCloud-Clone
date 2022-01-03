import React from "react";

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
        this.loginGuest = this.loginGuest.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user =  Object.assign({}, this.state);
        this.props.processForm(user);
        let body = document.querySelector('body');
        let overlay = document.querySelector('.overlay');
        overlay.classList.add('hide');
        body.classList.remove('grey');
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

     loginGuest() {
        const guest = {
            email: 'guest@gmail.com',
            username: 'guest',
            password: '123456'
        };
        
        this.props.loginGuest(guest);
        let body = document.querySelector('body');
        let overlay = document.querySelector('.overlay');
        overlay.classList.add('hide');
        body.classList.remove('grey');
    };
    
    closeModal() {
        const loginModal = document.getElementById('login-modal');
        const signupModal = document.getElementById('signup-modal');
        let overlay = document.querySelector('.overlay');
        let body = document.querySelector('body');
        if ($("#login-modal").hasClass('hidden') || ($("#signup-modal").hasClass("hidden"))){
            loginModal.classList.add('hidden');
            signupModal.classList.add('hidden');
            overlay.classList.add('hide');
            body.classList.remove('grey');
        };
    };

    render() {
        return (
            <div>
                <h2 className="form-type">{this.props.formType}</h2>
                <p className="x-btn" onClick={this.closeModal}>&#88;</p>
                <button className="guest-btn" onClick={this.loginGuest}>Login as a Guest</button>
                
                <ul className="errors-spash-form">
                    {
                        this.props.errors.map((error, idx) => <p key={idx}>{error}</p>)
                    }
                </ul>
                <form>
                <label>
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                            placeholder="Your Email address"
                        ></input>
                    </label>
                    <label>
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                            placeholder="Your Username"
                        ></input>
                    </label>
                    <label>
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                            placeholder="Your Password"
                        ></input>
                    </label>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
                
            </div>
        );
    };
};

export default SessionForm