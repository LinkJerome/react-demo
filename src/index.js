import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import {ConnectedRouter} from 'connected-react-router'
import {Provider} from "react-redux";
import * as serviceWorker from './serviceWorker';
import configureStore, {history} from "./store/configureStore";
import {connect as wsConnect} from '@giantmachines/redux-websocket';

const store = configureStore(/* provide initial state if any */);

store.dispatch(wsConnect('wss://ws-counter2.gigalixirapp.com'));

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
