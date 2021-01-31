import React, { Component } from 'react';

// importing Redux
import { connect } from "react-redux";
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


class BurgerBuilder extends Component {
    
    
    state = {
        purchasing: false,

    }

    componentDidMount () {
        this.props.onInitIngredients();
    }

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients) //create a array of keys of ingredients
        .map(igKey => {
            return ingredients[igKey]; // here I map all the keys and return values of this keys
        })
        .reduce((sum, el) => {
            return sum + el;
        }, 0);
        return sum > 0; // return true or false

    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    }


    closeModalHandler = () => {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () => {
        this.props.onInitPurchase();
        this.props.history.push("/checkout");
    }
    

    
    render() {

        const disabledInfo = {
            ...this.props.ings //it is copy of state
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        } // this help us know, which property have state 0, for example salad: true

        let orderSummary = null
        let burgerMaker = this.props.error ? <p> Ingredients cannot be loaded </p> : <Spinner />
        if (this.props.ings !== null && this.props.error === false) {
            burgerMaker = (
                <Aux>
                    <Burger ingredients={this.props.ings} />
                        <BuildControls
                            ingredientAdded={this.props.onIngredientAdded}
                            ingredientRemoved={this.props.onIngredientRemoved}
                            disabled={disabledInfo}
                            price={this.props.price}
                            purchaseable={this.updatePurchaseState(this.props.ings)}
                            ordered={this.purchaseHandler} />
                </Aux>);
                orderSummary = <OrderSummary ingredients={this.props.ings} cancel={this.closeModalHandler} continue={this.purchaseContinueHandler} price={this.props.price} />
        } 
        return(
            <Aux>
                <Modal show={this.state.purchasing} hideModal={this.closeModalHandler} >
                    {orderSummary}
                </Modal>
                {burgerMaker}

            </Aux>
        );
    }
}

const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) => dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) => dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () => dispatch(actions.initIngredients()),
        onInitPurchase: () => dispatch(actions.purchaseInit())
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));