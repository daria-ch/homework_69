import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {getPrice, initDishes, removeFromCart} from "../../store/actions/cartActions";
import './Cart.css';
import List from "../../components/List/List";
import Modal from "../../components/UI/Modal/Modal";
import CartList from "../../components/CartList/CartList";
import InfoForm from "../../components/InfoForm/InfoForm";

let cart = null;

class Cart extends Component {
    state = {
        purchasing: false,
    };

    componentDidMount() {
        this.props.initDishes();
    }

    isPurchasable = () => {
        const sum = Object.keys(this.props.dishes)
            .map(dishKey => this.props.dishes[dishKey])
            .reduce((sum, el) => sum + el, 0);
        return sum > 0;
    };

    purchaseHandler = () => {
        this.setState({purchasing: true});
    };

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    };

    render() {

        const list = Object.keys(this.props.dishes).map(dish => {
            return <List
                key={dish}
                text={dish}
                amount={this.props.dishes[dish]}
                // price={() => this.props.getPrice(dish)}
                onClick={() => this.props.removeFromCart(dish)}/>
        });

        if (!this.isPurchasable()) {
            cart = <p>Cart is empty</p>
        } else {
            cart = <Fragment>
                <CartList
                    delivery={this.props.delivery}
                    total={this.props.total}
                    purchasable={this.isPurchasable()}
                    purchaseHandler={this.purchaseHandler}>
                    {list}
                </CartList>
                <Modal
                    show={this.state.purchasing}
                    close={this.purchaseCancelHandler}
                >
                    <InfoForm/>
                </Modal>
            </Fragment>
        }

        return (
            <div className='Cart'>
                <h2>Cart</h2>
                {cart}
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