import {ADD_TO_CART, GET_PRICE, INIT_DISHES, REMOVE_FROM_CART} from "./actionTypes";

export const addToCart = (dish) => ({type: ADD_TO_CART, dish});
export const removeFromCart = (dish) => ({type: REMOVE_FROM_CART, dish});
export const initDishes = () => ({type: INIT_DISHES});
export const getPrice = (dish) => ({type: GET_PRICE, dish});