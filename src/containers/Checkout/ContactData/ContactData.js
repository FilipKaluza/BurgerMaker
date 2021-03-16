import React, { useState } from 'react';

// import Redux
import { connect } from "react-redux";

// import components
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

// import actions
import * as actions from "../../../store/actions/index";

// import checkvalidity from shared folder
import { checkValidity } from "../../../shared/utility";


// import css
import classes from "./ContactData.css"

const contactData = (props) => {

    const [orderForm, setOrderForm ] = useState({
        name: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your Name"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        street: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Your street"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        postalCode: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Postal code"
            },
            value: "",
            validation: {
                required: true,
                minLength: 5
            },
            valid: false,
            touched: false
        },
        country: {
            elementType: "input",
            elementConfig: {
                type: "text",
                placeholder: "Country"
            },
            value: "",
            validation: {
                required: true,
            },
            valid: false,
            touched: false
        },
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "Your e-mail"
            },
            value: "",
            validation: {
                required: true,
                email: true
            },
            valid: false,
            touched: false
        },
        deliveryMethod: {
            elementType: "select",
            elementConfig: {
                options: [
                    {value: "fastest", displayValue: "Fastest"},
                    {value: "cheapest", displayValue: "Cheapest"}
                ]
            },
            value: "fastest",
            validation: {},
            valid: true
        }
    });

    const [formIsValid, setFormIsValid] = useState(false);

    const orderHandler = (event) => {
        event.preventDefault();
        const formData = {}
        for (let forElementIdentifier in orderForm) {
            formData[forElementIdentifier] = orderForm[forElementIdentifier].value
        }
        const order = {
            ingredients: props.ings,
            price: props.price, //in production is needed calculate this price on server, because some people can manipulate code before sending it
            orderData: formData,
            userId: props.userId
        }

        props.onOrderBurger(order, props.token);
        
    }

    const inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...orderForm // copy my state object
        };

        const updatedFormElement = { ...updatedOrderForm[inputIdentifier] }; //I need to have access to values in specific key

        updatedFormElement.value = event.target.value
        updatedFormElement.valid = checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement
        
        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        setOrderForm(updatedOrderForm);
        setFormIsValid(formIsValid);
    }

   
    const formElementArray = [];
    for (let key in orderForm) {
        formElementArray.push({
            id: key,
            config: orderForm[key]
        });
    }


    let form = (<form onSubmit={orderHandler}>
        {formElementArray.map(formElement => (
            <Input 
                key={formElement.id}
                elementType={formElement.config.elementType}
                elementConfig={formElement.config.elementConfig}
                value={formElement.config.value}
                changed={(event) => inputChangedHandler(event, formElement.id)}
                invalid={!formElement.config.valid}
                shouldValidate={formElement.config.validation}
                touched={formElement.config.touched} />
        ))}
        <Button btnType="Success" disabled={!formIsValid} > Order now </Button>
        </form>)
    if (props.loading) {
        form = <Spinner />
    }

    return (
        <div className={classes.ContactData}>
            <h4> Enter your Contact Data </h4>
            {form}
        </div>
    )
    
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (orderData, token) => dispatch(actions.purchaseBurger(orderData, token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(contactData, axios));