import React from 'react'

//import components
import BuildControl from "./BuildControl/BuildControl";

//import css
import classes from "./BuildControls.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" }

]

const buildControls = ( props ) => {
    return(
        <div className={classes.BuildControls}>
            <p> Actual price of your burger: <strong>{props.price.toFixed(2)} </strong> </p>
            {controls.map(ctrl => {
                return <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)} 
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}/>
            })}
            <button 
                className={classes.OrderButton}
                disabled={!props.purchaseable}
                onClick={props.ordered}  > ORDER NOW </button>
        </div>
    )
}



export default buildControls