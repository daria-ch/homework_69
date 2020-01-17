import React, {Component} from 'react';
import Dishes from "../Dishes/Dishes";
import Cart from "../Cart/Cart";
import './OrderApp.css';


class OrderApp extends Component {
    render() {
        return (
            <div className='OrderApp'>
                <Dishes/>
                <Cart/>
            </div>
        );
    }
}

export default OrderApp;