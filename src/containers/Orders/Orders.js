import React, { Component } from 'react';
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


class Orders extends Component {

    componentDidMount() {
        this.props.onFetchOrders(this.props.token);
    }

    render() {
        const orders = this.props.loading ? <Spinner /> : <div> {this.props.orders.map(order =>(<Order key={order.id} ingredients={order.ingredients}  price={+order.price} />))}  </div>
        
        return orders
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrders(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));