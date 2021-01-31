import * as actiontTypes from "../actions/actionsTypes";

const initialState = {
    orders: [],
    loading: false,
    purchased: false
}

// purchase cases
const purchase_init = (state, action) => {
    return {
        ...state,
        purchased: false
    }
}

const purchase_burger_start = (state, action) => {
    return {
        ...state,
        loading: true
    };
}

const purchase_burger_succes = (state, action) => {
    const newOrder = {
        ...action.orderData,
        id: action.orderId,
    };
    return {
        ...state,
        loading: false,
        orders: state.orders.concat(newOrder), //concat retunr a nwe obj
        purchased: true
    };
}

const purchase_burger_fail = (state, action) => {
    return {
        ...state,
        loading: false,

    };
}

// fetch orders cases

const fetch_orders_start = (state, action) => {
    return {
        ...state,
        loading: true
    };
}

const fetch_orders_success = (state, action) => {
    return {
        ...state,
        orders: action.orders,
        loading: false
    };
}

const fetch_orders_fail = (state, action) => {
    return {
        ...state,
        loading: false
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontTypes.PURCHASE_INIT: return purchase_init(state, action);
        case actiontTypes.PURCHASE_BURGER_START: return purchase_burger_start(state, action);
        case actiontTypes.PURCHASE_BURGER_SUCCESS: return purchase_burger_succes(state, action);
        case actiontTypes.PURCHASE_BURGER_FAIL: return purchase_burger_fail(state, action);
        
        // cases for fetch orders
        case actiontTypes.FETCH_ORDERS_START: return fetch_orders_start(state, action);
        case actiontTypes.FETCH_ORDERS_SUCCESS: return fetch_orders_success(state, action);
        case actiontTypes.FETCH_ORDERS_FAIL: return fetch_orders_fail(state, action);
        default:
            return state;
    }
};

export default reducer;