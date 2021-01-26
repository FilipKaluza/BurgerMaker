import React, { Component } from 'react';
import { Route } from "react-router-dom";

// import redux
import { connect } from "react-redux";

// import components
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

// import statefull components
import ContactData from "./ContactData/ContactData";

class Checkout extends Component {



    checkoutContinueHandler = () => {
        this.props.history.replace("/checkout/contact-data")
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    render() {

        return (
            <div>
                <CheckoutSummary onCheckoutCancelled={this.checkoutCancelHandler} onCheckoutContinue={this.checkoutContinueHandler} ingredients={this.props.ings} />
                <Route path={this.props.match.path + "/contact-data"} component={ContactData} /> {/* when I want send some state to child component which I render here insted component={component} I use render method like this */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients,
        price: state.totalPrice
    }
}

export default connect(mapStateToProps)(Checkout);