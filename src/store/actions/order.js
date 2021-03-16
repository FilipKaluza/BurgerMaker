import * as actionTypes from "./actionsTypes";
import axios from "../../axios-orders";

// sync 
export const purchaseBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
};

export const purchaseBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    }
}

export const purchaseBurgerStart = () => {
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};


// async 
export const purchaseBurger = (orderData, token) => {
    return dispatch => {
        purchaseBurgerStart();
        axios.post("/orders.json?auth=" + token, orderData )
            .then(response => {
                dispatch(purchaseBurgerSuccess(response.data.name, orderData));
            })
            .catch(error => {
                dispatch(purchaseBurgerFail(error));
            }) 
    };
};

export const purchaseInit = () => {
    return {
        type: actionTypes.PURCHASE_INIT
    };
};


// fetch orders from servers

export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}

export const fetchOrdersSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFail = (error) => {
    return {
        type: actionTypes.FETCH_ORDERS_FAIL,
        error: error
    }
}

// async

export const fetchOrders = (token, userId) => {
    return dispatch => {
        dispatch(fetchOrdersStart());
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"'; // fetch only orders for specific user
        axios.get("/orders.json" + queryParams)
            .then(response => {
                const fetchedOrders = [];
                for ( let key in response.data) {
                    fetchedOrders.push({...response.data[key], id: key}) // fetch orders from database and turn it to array 
                }
                dispatch(fetchOrdersSuccess(fetchedOrders));
            })
            .catch(e => {
                dispatch(fetchOrdersFail(e));
            })
    };
};