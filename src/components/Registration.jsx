import React, { Component } from 'react';
import {createToken} from '../actions';
import { connect } from 'react-redux';
import {PasswordShowHide} from './PasswordShowHide'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            mail: '',
            password: ''
        }

        this.handleUser = this.handleUser.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        
    }

    handleUser(event) {
        this.setState({user: event.target.value})
        console.log(this.state.user)
    }

    handleEmail(event) {
        this.setState({mail: event.target.value})
        console.log(this.state.mail)
    }

    handlePassword(event) {
        this.setState({password: event.target.value})
        console.log(this.state.password)
    }

    signUp() {
        this.props.createToken(this.state.user, this.state.mail, this.state.password)
    }




    render() {
        return (
            <div className='login'>
                <div className='login-form-group'>
                    <input
                        placeholder ='Username'
                        className='login-form-control'
                        onChange = {this.handleUser}
                    />
                    <input
                        placeholder ='Email'
                        className='login-form-control'
                        onChange = {this.handleEmail}
                    />
                    {/*<input
                        placeholder ='Password'
                        className='login-form-control'
                        onChange = {this.handlePassword}
                    />*/}
                    <PasswordShowHide
                        placeholder ='Password'
                        className='login-form-control'
                        onChange = {this.handlePassword}
                    />
                    <button
                        type="button"
                        className="add-button"
                        disabled={(this.state.mail && this.state.password && this.state.user !== 0) ? false : true}
                        onClick={() => this.signUp()}
                    >Sign Up</button>
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

export default connect(mapStateToProps, { createToken }) (Registration);

