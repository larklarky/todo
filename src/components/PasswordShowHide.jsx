import React, { Component } from 'react';


export class PasswordShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
            password: '',
        } 
        this.toggleShow = this.toggleShow.bind(this); 
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
      }

      handlePasswordChange(e) {
        this.setState({ password: e.target.value });
      }

      componentDidMount() {
        if (this.props.password) {
          this.setState({ password: this.props.password });
        }
      }
    
    

    render() {
        return(
            <div>
                <input
                placeholder ='Password'
                className='login-form-control'
                type={this.state.hidden ? "password" : "text"}
                value={this.state.password}
                onChange={this.handlePasswordChange}
                />
                <div className='password-input'>
                <input className='password'type='checkbox' onClick={this.toggleShow}/>
                <p>Show password</p>
                </div>
            </div>
        )
    }
}