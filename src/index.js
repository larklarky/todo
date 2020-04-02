import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers'
import './index.css';
import { applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store = {store}>
        <App/>
    </Provider>, document.getElementById('root')
)