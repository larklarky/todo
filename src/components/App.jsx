import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Login from './Login';
import {Registration} from './Registration';
import Todo from './Todo';

export class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <Router>
                <ul className="nav">
                    <li className='title-nav'><Link to='/'>ToDo</Link></li>
                    <li className='menu'><Link to='/login'>Login</Link></li>
                    <li className='menu'><Link to='/signup'>SignUp</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/">
                        <Todo />
                    </Route>
                    <Route path='/login'>
                        <Login />
                    </Route>
                    <Route path='/signup'>
                        <Registration/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}


