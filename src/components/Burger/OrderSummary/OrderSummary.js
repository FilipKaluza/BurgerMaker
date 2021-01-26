import React, { Component } from 'react'
import Aux from "../../../hoc/Aux/Aux";

// import componnents
import Button from "../../UI/Button/Button";

class OrderSummary extends Component{
    // this could be  a func component
    componentDidUpdate() {
        console.log("updateing ordersummary")
    }

    render() {{
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (<li key={igKey}> 
                        <span style={{textTransform: "capitalize"}}> {igKey}</span>: {this.props.ingredients[igKey]}
                    </li>); //wrap span for first capitalize letter
        })
    
        return (
            <Aux>
                <h3> Your order</h3>
                <p> Your delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p> Total const: <strong>{this.props.price.toFixed(2)} </strong> </p>
    
                <p> Countinue to Checkout ?</p>
    
                <Button clicked={this.props.cancel} btnType={"Danger"}> Cancel</Button>  
                <Button clicked={this.props.continue} btnType={"Success"}> Continue</Button>  
                
            </Aux>
        )
    }}

}

export default OrderSummary;