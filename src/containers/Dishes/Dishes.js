import React, {Component} from 'react';
import {getDishes} from "../../store/actions/dishesActions";
import {connect} from "react-redux";
import Card from "../../components/UI/Card/Card";


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
    getDishes: () => dispatch(getDishes())
});


export default connect(mapStateToProps, mapDispatchToProps)(Dishes);