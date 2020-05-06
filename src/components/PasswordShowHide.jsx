import React, { Component } from 'react';


export class PasswordShowHide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true,
        } 
        this.toggleShow = this.toggleShow.bind(this); 
    }

    toggleShow() {
        this.setState({ hidden: !this.state.hidden });
    }
    

    render() {
        return(
            <div>
                <input
                    placeholder ={this.props.placeholder}
                    className={this.props.className}
                    type={this.state.hidden ? "password" : "text"}
                    value={this.props.password}
                    onChange={this.props.onChange}
                    />
                    <div className='password-input'>
                        <input className='password'type='checkbox' onClick={this.toggleShow}/>
                        <p>Show password</p>
                    </div>
            </div>
        )
    }
}