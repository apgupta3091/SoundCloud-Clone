import React from "react";

class Discover extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <div>
                <p>Hello, {this.props.currentUser.username}</p>
                <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
                <Footer />
            </div>
        );
    };
};

export default Discover;