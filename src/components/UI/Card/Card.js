import React from 'react';
import Button from "../Button/Button";
import './Card.css';


const Card = props => {
    return (
        <div className='Card'>
            <img src={props.image} alt={props.name}/>
            <div className='text'>
                <span>{props.name}</span>
                <span><b>{props.price} KGS</b></span>
            </div>
            <Button onClick={props.toCartAdded}>Add to Cart</Button>
        </div>
    );
};

export default Card;