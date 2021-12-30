import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        const user =  Object.assign({}, this.state);
        this.props.processForm(user);
    };

    link(){
        return this.props.formType === 'signup' ? 'login' : 'signup';
    };

      handleInput(type){
        return (e) => this.setState({ [type]: e.target.value });
    };


    render() {
        return (
            <div>
                
                <h2>{this.props.formType}</h2>
                <Link to={`/${this.link()}`}>{this.link()}</Link>
                <ul>
                    {
                        this.props.errors.map((error, idx) => <p key={idx}>{error}</p>)
                    }
                </ul>
                <form>
                <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        ></input>
                    </label>
                    <label>Username:
                        <input
                            type="text"
                            value={this.state.username}
                            onChange={this.handleInput('username')}
                        ></input>
                    </label>
                    <br></br>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        ></input>
                    </label>
                    <br></br>
                    <button onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        );
    };
};

export default SessionForm