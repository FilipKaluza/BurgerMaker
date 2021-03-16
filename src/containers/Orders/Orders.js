import React, { useEffect } from 'react';
import axios from "../../axios-orders";

// import components
import Order from "../../components/Order/Order";
import Spinner from "../../components/UI/Spinner/Spinner";


// import hoc
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";


// import connect for connecting redux
import { connect } from "react-redux";

// import actions
import * as actions from "../../store/actions/index";


const orders = (props) => {

    const { onFetchOrders } = props;

    useEffect(() => {
        props.onFetchOrders(props.token, props.userId)
    }, [onFetchOrders]);

    const orders = props.loading ? <Spinner /> : <div> {props.orders.map(order =>(<Order key={order.id} ingredients={order.ingredients}  price={+order.price} />))}  </div>
    
    return orders
    
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(orders, axios));