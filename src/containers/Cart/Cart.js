import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPrice, initDishes, removeFromCart} from "../../store/actions/cartActions";
import './Cart.css';
import List from "../../components/UI/List/List";
import Button from "../../components/UI/Button/Button";

let list = null;

class Cart extends Component {

    componentDidMount() {
        this.props.initDishes();
    }

    render() {

        if (!this.props.dishes) {
            list = <p>Cart is empty</p>
        } else {
            list = Object.keys(this.props.dishes).map(dish => {
                    return <List
                        key={dish}
                        text={dish}
                        amount={this.props.dishes[dish]}
                        price={() => this.props.getPrice(dish)}
                        onClick={() => this.props.removeFromCart(dish)}/>
                }
            )
        }

        return (
            <div className='Cart'>
                <h2>Cart</h2>
                <div className='cartList'>
                    {list}
                    <hr style={{width: '50%', marginBottom: '30px'}}/>
                    <p>Доставка: {this.props.delivery}</p>
                    <p>Итого: {this.props.total}</p>
                </div>
                <Button>Place order</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dishes: state.cart.dishes,
    total: state.cart.total,
    delivery: state.cart.delivery
});

const mapDispatchToProps = dispatch => ({
    initDishes: () => dispatch(initDishes()),
    getPrice: dish => dispatch(getPrice(dish)),
    removeFromCart: dish => dispatch(removeFromCart(dish))
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);