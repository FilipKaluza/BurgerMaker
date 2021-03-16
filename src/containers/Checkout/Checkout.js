import React from 'react';
import { Route, Redirect } from "react-router-dom";

// import redux
import { connect } from "react-redux";



// import components
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

// import statefull components
import ContactData from "./ContactData/ContactData";



const checkout = (props) => {

    const checkoutContinueHandler = () => {
        props.history.replace("/checkout/contact-data")
    }

    const checkoutCancelHandler = () => {
        props.history.goBack();
    }

 
    let summary = <Redirect to="/" /> 
    if (props.ings) {
        const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
        summary = (
            <div>
                {purchasedRedirect}
                <CheckoutSummary onCheckoutCancelled={checkoutCancelHandler} onCheckoutContinue={checkoutContinueHandler} ingredients={props.ings} />
                <Route path={props.match.path + "/contact-data"} component={ContactData} /> {/* when I want send some state to child component which I render here insted component={component} I use render method like this */}
            </div>
        );
        

        return summary
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        purchased: state.order.purchased
    }
}


export default connect(mapStateToProps)(checkout);