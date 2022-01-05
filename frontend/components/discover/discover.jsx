import React from "react";
import Footer from '../footer/footer';
import NavBarContainer from '../navbar/navbar_container';

class Discover extends React.Component {
    constructor(props){
        super(props);
    };

    componentDidMount(){
        this.props.fetchSongs();
    }

    render(){
        return(
            <div>
                <NavBarContainer />
                <h1>hello</h1>
                <p>Hello, {this.props.currentUser.username}</p>
                <button className="logout-btn" onClick={this.props.logout}>Log Out</button>
                <Footer />
            </div>
        );
    };
};

export default Discover;