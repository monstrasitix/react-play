// Core
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Store } from 'redux';
import { History } from 'history';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';


// Views
import App from '../App/App.component';


export interface IRootProps
{
    store: Store;
    history: History;
};


export const Root: React.FC<IRootProps> = ({ history, store }) => (
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);


Root.propTypes = {
    store: PropTypes.any.isRequired,
    history: PropTypes.any.isRequired,
};


Root.defaultProps = {};


export default Root;
