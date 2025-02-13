import * as actionTypes from "./actionsTypes";
//import axios for http req
import axios from "../../axios-orders";

// sync
export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    };
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
};

// async 
export const initIngredients = () => {
    return dispatch => {
        axios.get("https://burgerproject-reactive-default-rtdb.firebaseio.com/ingredients.json")
            .then(response => {
                dispatch(setIngredients(response.data));
            })
            .catch(error => {
                dispatch(fetchIngredientFailed());
            }) 
    };
};