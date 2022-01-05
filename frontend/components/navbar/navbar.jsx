import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.display = this.display.bind(this);
    };

    display(){
        return(

            this.props.currentUser ? (
            <nav className="navbar">
                <h1 className="nav-logo">SOUNDWAVE</h1>
                <Link className="nav-link home" to='/discover'>Home</Link>
                <Link className="nav-link" id="signin-link" to='/upload'>Upload</Link>
                <Link className="nav-link" id='signup-link' to='/'>{this.props.currentUser.username}</Link>
                <button className="nav-link nav-log-out" id='upload-link' onClick={this.props.logout}>Log Out</button>

            </nav>
            ) : (
            <nav className="navbar">
                <h1 className="nav-logo">SOUNDWAVE</h1>
                <Link className="nav-link home" to='/'>Home</Link>
                <Link className="nav-link" id="signin-link" to='/'>Sign in</Link>
                <Link className="nav-link" id='signup-link' to='/'>Create account</Link>
                <Link className="nav-link" id='upload-link' to='/'>Upload</Link>
            </nav>
            )
        );
    };

    render(){
        return (
            <div>
                {this.display()}
            </div>
        );
    };
};

export default NavBar;