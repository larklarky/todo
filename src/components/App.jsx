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
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/signup'>SignUp</Link>
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
