const initialState = {
    dishes: {
        plov: 0,
        bread: 0,
        salad: 0
    },
    delivery: 150,
    total: 0
};

const INITIAL_DISHES = {
    plov: 0,
    bread: 0,
    salad: 0
};

const DELIVERY_PRICE = 20;

const INGREDIENT_PRICES = {
    plov: 210,
    bread: 20,
    salad: 100
};


const cartReducer = (state = initialState, action) => {
    return state;
};

export default cartReducer;