import React from 'react';
import './List.css';

const List = props => {
    return (
        <div className='List'>
            <span onClick={props.onClick}>{props.text}</span>
            <span> x {props.amount}</span>
            <span><b>{props.price}</b></span>
        </div>
    );
};

export default List;