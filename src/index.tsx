// Style
import './styles/main.scss';


// Core
import * as React from 'react';
import { render } from 'react-dom';


// Components
import Root from './app/views/Root/Root.view';


// Dependencies
import store from './app/store';
import history from './app/history';


document.addEventListener('DOMContentLoaded', () => {
    render(
        <Root
            store={store}
            history={history}
        />,
        document.getElementById('app'),
    );
});