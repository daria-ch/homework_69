import React, {Component} from 'react';
import {getDishes} from "../../store/actions/dishesActions";
import {connect} from "react-redux";
import Card from "../../components/Card/Card";
import {addToCart} from "../../store/actions/cartActions";


class Dishes extends Component {

    componentDidMount() {
        this.props.getDishes();
    }

    render() {
        const dishes = this.props.dishes.map(dish => {
            return <Card
                key={dish.name}
                name={dish.name}
                image={dish.image}
                price={dish.price}
                toCartAdded={() => this.props.addToCart(dish.name)}
            />
        });

        return (
            <div>
                {dishes}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dishes: state.dishes.dishes,
});
const mapDispatchToProps = dispatch => ({
    getDishes: () => dispatch(getDishes()),
    addToCart: dish => dispatch(addToCart(dish))
});


export default connect(mapStateToProps, mapDispatchToProps)(Dishes);