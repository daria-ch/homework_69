import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import App from './App';
import cartReducer from "./store/reducers/cartReducer";
import dishesReducer from "./store/reducers/dishesReducer";
import orderReducer from "./store/reducers/orderReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    dishes: dishesReducer,
    cart: cartReducer,
    order: orderReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));