import {DISHES_ERROR, DISHES_REQUEST, DISHES_SUCCESS} from "./actionTypes";
import axiosOrders from "../../axios-orders";

export const dishesRequest = () => ({type: DISHES_REQUEST});
export const dishesSuccess = (dishes) => ({type: DISHES_SUCCESS, dishes});
export const dishesError = error => ({type: DISHES_ERROR, error});

export const getDishes = () => {
    return async dispatch => {
        try {
            dishesRequest();
            const response = await axiosOrders.get('/dishes.json');
            const dishes = Object.keys(response.data).map(id => {
                return {...response.data[id]}
            });
            dispatch(dishesSuccess(dishes));
        } catch (e) {
            dishesError(e);
        }
    }
};
