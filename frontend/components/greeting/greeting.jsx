import React from "react";
import { Link } from 'react-router-dom';

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
                <Link to='/signup'>Sign Up</Link>
                <Link to='/login'>Log In</Link>
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