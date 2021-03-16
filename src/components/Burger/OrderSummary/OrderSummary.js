import React from 'react'
import Aux from "../../../hoc/Aux/Aux";

// import componnents
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {



    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (<li key={igKey}> 
                    <span style={{textTransform: "capitalize"}}> {igKey}</span>: {props.ingredients[igKey]}
                </li>); //wrap span for first capitalize letter
    })

    return (
        <Aux>
            <h3> Your order</h3>
            <p> Your delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p> Total const: <strong>{props.price.toFixed(2)} </strong> </p>

            <p> Countinue to Checkout ?</p>

            <Button clicked={props.cancel} btnType={"Danger"}> Cancel</Button>  
            <Button clicked={props.continue} btnType={"Success"}> Continue</Button>  
            
        </Aux>
    )


}

export default orderSummary;