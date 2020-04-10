import React, { Component } from 'react';
import {getToken} from '../actions';
import { connect } from 'react-redux';

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            password: '',
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);

    }

    handleEmail(event) {
        this.setState({mail: event.target.value})
        console.log(this.state.mail)
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    login() {
        console.log('login', this.props.getToken)
        this.props.getToken(this.state.mail, this.state.password)
    }

    render() {
        return(
            <div className='login'>
                <div className='login-form-group'>
                    <input
                        placeholder ='Email'
                        className='login-form-control'
                        onChange = {this.handleEmail}
                    />
                    <input
                        placeholder ='Password'
                        className='login-form-control'
                        onChange = {this.handlePassword}
                    />
                    <button
                        type="button"
                        className="add-button"
                        disabled={(this.state.mail && this.state.password !== 0) ? false : true}
                        onClick={() => this.login()}
                    >Log In</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        todos: state
    }
}

export default connect(mapStateToProps, { getToken }) (Login);