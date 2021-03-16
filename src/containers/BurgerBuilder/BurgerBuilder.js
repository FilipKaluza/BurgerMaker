import React, { useState, useEffect, useCallback } from 'react';

// importing Redux
import { useDispatch, useSelector } from "react-redux"; // use Dispatch and useSeceltor are Hooks instead mapStateToProps and mapDispatchToProps
import * as actions from "../../store/actions/index";


// import hoc components
import Aux from "../../hoc/Aux/Aux";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

// import components
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";


import axios from "../../axios-orders";


const burgerBuilder = (props) => {
    
    const [purchasing, setPurchasing] = useState(false);

    const ings = useSelector(state => state.burgerBuilder.ingredients);

    const price = useSelector(state => state.burgerBuilder.totalPrice);

    const error = useSelector(state => state.burgerBuilder.error);

    const isAuthenticated = useSelector(state => state.auth.token !== null);


    const dispatch = useDispatch();

    const onIngredientAdded = (ingName) => dispatch(actions.addIngredient(ingName));
    const onIngredientRemoved = (ingName) => dispatch(actions.removeIngredient(ingName));
    const onInitIngredients = useCallback(() => dispatch(actions.initIngredients()), []); // useCallback is for avoid of re-creation of component (without it we have annoying infinitive loop
    const onInitPurchase = () => dispatch(actions.purchaseInit());
    const onSetRedirectUrl = (url) => dispatch(actions.setAuthRedirectUrl(url));
    
    useEffect(() => {
        onInitIngredients();
    }, [onInitIngredients])


    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients) //create a array of keys of ingredients
        .map(igKey => {
            return ingredients[igKey]; // here I map all the keys and return values of this keys
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0; // return true or false

    }

    const purchaseHandler = () => {
        if (props.isAuthenticated) {
            setPurchasing(true)
        } else {
            onSetRedirectUrl("/checkout");
            props.history.push("/auth");
        }
        
    }


    const closeModalHandler = () => {
        setPurchasing(false)
    }

    const purchaseContinueHandler = () => {
        onInitPurchase();
        props.history.push("/checkout");
    }

    const disabledInfo = {
        ...ings //it is copy of state
    };

    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0
    } // this help us know, which property have state 0, for example salad: true

    let orderSummary = null
    let burgerMaker = error ? <p> Ingredients cannot be loaded </p> : <Spinner />
    if (ings !== null && error === false) {
        burgerMaker = (
            <Aux>
                <Burger ingredients={ings} />
                    <BuildControls
                        ingredientAdded={onIngredientAdded}
                        ingredientRemoved={onIngredientRemoved}
                        disabled={disabledInfo}
                        price={price}
                        isAuth = {isAuthenticated}
                        purchaseable={updatePurchaseState(ings)}
                        ordered={purchaseHandler} />
            </Aux>);
            orderSummary = <OrderSummary ingredients={ings} cancel={closeModalHandler} continue={purchaseContinueHandler} price={price} />
    } 

    const logo = "<Kaluza.DEV />"
    return(
        <Aux>
            <Modal show={purchasing} hideModal={closeModalHandler} >
                {orderSummary}
            </Modal>
            {burgerMaker}
            <p style={{color: "#000", width: "100%", textAlign: "center"}}> Made by <a style={{color: "#000", fontFamily: "Wallpoet, cursive" }} href="https://kaluza.dev" > {logo}  </a> according to the course from <a href="https://udemy.com"> Udemy </a></p>

        </Aux>
    );
    
}



export default withErrorHandler(burgerBuilder, axios);