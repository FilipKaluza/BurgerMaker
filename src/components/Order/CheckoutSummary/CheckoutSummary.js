import React from 'react'

// import css
import classes from "./CheckoutSummary.css"

// import components
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1> We hope it taste delicious :)</h1>
            <Burger ingredients={props.ingredients} />
            <Button clicked={props.onCheckoutCancelled} btnType="Danger" > Cancel </Button>
            <Button clicked={props.onCheckoutContinue} btnType="Success" > Continue </Button>

        </div>
    )
}

export default checkoutSummary;