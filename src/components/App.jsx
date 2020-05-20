import React, { Component } from 'react';
import {HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login';
import Registration from './Registration';
import Todo from './Todo';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/">
                        <div className='navbar'>
                            <span className='title-nav'><Link to='/'>ToDo</Link></span>
                            <ul className="nav">
                                <li className='menu'><Link to='/logout'>Logout</Link></li>
                            </ul>
                        </div>
                        
                        <Todo />
                    </Route>
                    <Route path='/login'>
                        <div className='navbar'>
                            <span className='title-nav'><Link to='/'>ToDo</Link></span>
                            <ul className="nav">
                                <li className='menu'><Link to='/signup'>SignUp</Link></li>
                                <li className='menu'><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <div className='navbar'>
                            <span className='title-nav'><Link to='/'>ToDo</Link></span>
                            <ul className="nav">
                                <li className='menu active'><Link to='/signup'>SignUp</Link></li>
                                <li className='menu'><Link to='/login'>Login</Link></li>
                            </ul>
                        </div>
                        <Registration/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

