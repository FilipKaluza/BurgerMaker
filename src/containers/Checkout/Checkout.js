import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";

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
        let summary = <Redirect to="/" /> 
        if (this.props.ings) {
            const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
            summary = (
                <div>
                    {purchasedRedirect}
                    <CheckoutSummary onCheckoutCancelled={this.checkoutCancelHandler} onCheckoutContinue={this.checkoutContinueHandler} ingredients={this.props.ings} />
                    <Route path={this.props.match.path + "/contact-data"} component={ContactData} /> {/* when I want send some state to child component which I render here insted component={component} I use render method like this */}
                </div>
            );
        }

        return summary
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(Checkout);