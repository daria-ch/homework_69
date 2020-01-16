import {ADD_TO_CART, GET_PRICE, INIT_DISHES, REMOVE_FROM_CART} from "../actions/actionTypes";

const initialState = {
    dishes: {
        Плов: 0,
        Лепешка: 0,
        Шакарап: 0
    },
    delivery: 150,
    total: 150,
    price: 0
};

const INITIAL_DISHES = {
    Плов: 0,
    Лепешка: 0,
    Шакарап: 0
};

const DELIVERY_PRICE = 150;

const DISH_INITIAL_PRICES = {
    Плов: 210,
    Лепешка: 20,
    Шакарап: 100
};


const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.dish]: state.dishes[action.dish] + 1
                },
                total: state.total + DISH_INITIAL_PRICES[action.dish]
            };
        case REMOVE_FROM_CART:
            if (state.dishes[action.dish] === 0) {
                return state;
            }
            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.dish]: state.dishes[action.dish] - 1
                },
                total: state.total - DISH_INITIAL_PRICES[action.dish]
            };
        case GET_PRICE:
            return {
                ...state,
                price: INITIAL_DISHES[action.dish] * DISH_INITIAL_PRICES[action.dish]
            };
        case INIT_DISHES:
            return {
                ...state,
                dishes: INITIAL_DISHES,
                total: DELIVERY_PRICE
            };
        default:
            return state;
    }
};

export default cartReducer;