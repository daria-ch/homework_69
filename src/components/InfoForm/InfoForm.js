import React, {Component} from 'react';
import './InfoForm.css';
import Button from "../UI/Button/Button";
import Spinner from "../UI/Spinner/Spinner";
import {connect} from "react-redux";
import {createOrder} from "../../store/actions/orderActions";
import {initDishes} from "../../store/actions/cartActions";

class InfoForm extends Component {
    state = {
        name: '',
        address: '',
        number: ''
    };

    valueChanged = (event) => this.setState({[event.target.name]: event.target.value});


    orderHandler = async (event) => {
        event.preventDefault();
        const order = {
            dishes: this.props.dishes,
            total: this.props.total,
            customer: {
                name: this.state.name,
                address: this.state.address,
                number: this.state.number
            }
        };
        await this.props.createOrder(order);
        this.props.initDishes();
    };


    render() {
        let form = (
            <form onSubmit={this.orderHandler}>
                <input className='Input' type="text" name='name' placeholder='Your name' value={this.state.name}
                       onChange={this.valueChanged}/>
                <input className='Input' type="text" name='address' placeholder='Your address'
                       value={this.state.address}
                       onChange={this.valueChanged}/>
                <input className='Input' type="text" name='number' placeholder='Your phone number'
                       value={this.state.number} onChange={this.valueChanged}/>
                <Button>ORDER</Button>
            </form>
        );

        if (this.props.loading) {
            form = <Spinner/>
        }
        return (
            <div>
                <h1>Enter your data</h1>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    loading: state.order.loading,
    error: state.order.error,
    dishes: state.cart.dishes,
    total: state.cart.total
});

const mapDispatchToProps = dispatch => ({
    createOrder: (order) => dispatch(createOrder(order)),
    initDishes: () => dispatch(initDishes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(InfoForm);