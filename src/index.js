import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import store from './Store'
import './index.css'

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app,document.getElementById('root'));


serviceWorker.unregister();
