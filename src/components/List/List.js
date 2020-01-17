import React from 'react';
import './List.css';

const List = props => {
    return (
        <div className='List'>
            <span onClick={props.onClick}>{props.text}</span>
            <span className='amount'> x {props.amount}</span>
            <span className='price'><b>{props.price}</b></span>
        </div>
    );
};

export default List;