import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from 'redux'; // applyMiddleware and compose are required for redux-thunk
import burgerBuilderReducer from "./store/reducers/burgerBuilder";
import thunk from "redux-thunk"; // for async code in reducers

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(burgerBuilderReducer, composeEnhancers(
    applyMiddleware(thunk)
))

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    
)

ReactDOM.render( app, document.getElementById('root'));
registerServiceWorker();
