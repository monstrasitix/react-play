// Core
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';


// Dependencies
import saga from './sagas';
import reducer from './reducers';


const sagaMiddleware = createSagaMiddleware();


const store = createStore(
    reducer,
    applyMiddleware(
        sagaMiddleware,
    ),
);


sagaMiddleware.run(saga);


export default store;