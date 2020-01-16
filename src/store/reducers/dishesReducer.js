import {DISHES_ERROR, DISHES_REQUEST, DISHES_SUCCESS} from "../actions/actionTypes";

const initialState = {
    dishes: [],
    error: null
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case DISHES_REQUEST:
            return state;
        case DISHES_SUCCESS:
            return {
                ...state,
                dishes: action.dishes
            };
        case DISHES_ERROR:
            return {
                ...state,
                error: action.error
            };
        default:
            return state;
    }
};

export default dishesReducer;