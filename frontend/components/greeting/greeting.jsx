import React from "react";
import LoginContainer from '../session/login_container'
import SignupContainer from '../session/signup_container';

class Greeting extends React.Component {
    constructor(props){
        super(props)
        this.display = this.display.bind(this);
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
                <button>Sign in</button>
                <button>Create account</button>
                <div>
                    <LoginContainer />
                </div>
                <div>
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