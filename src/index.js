/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components/g-app/app.component';
import store from './redux/store';

const rootElement = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    rootElement
);