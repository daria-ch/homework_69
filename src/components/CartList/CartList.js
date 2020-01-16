import React from 'react';
import './CartList.css';

const CartList = props => {
    return (
        <div className='cartList'>
            {props.children}
            <hr style={{width: '50%', marginBottom: '30px'}}/>
            <p>Доставка: {props.delivery}</p>
            <p>Итого: {props.total}</p>
            <button className='orderButton' onClick={props.purchaseHandler}
                    disabled={!props.purchasable}
            >
                Place order
            </button>
        </div>
    )
};

export default CartList;