import React from 'react';

//import css
import classes from "./Burger.css";

// import components
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";


const burger = ( props ) => {

    let transformedIngredients = Object.keys(props.ingredients) //convert object to array of keys
        .map(igKey => { //igKey is for example now just string salad
            return [...Array(props.ingredients[igKey])].map((_, i) => { //[...Array(props.ingredients[igKey])] this method create new array with undefined fields (as many fields as many keys )
                return <BurgerIngredient key={igKey + i} type={igKey} /> //i is index, in help us create a list of ingriedients, +1 is because first index is 0
            })
        }).reduce((arr, el) => { // .reduce with concat help us merge empty arrays in one arr, which help us give customer give information to start adding ingredients
            return arr.concat(el)
        }, []) 

    if (transformedIngredients.length <= 0) {
        transformedIngredients = <p> You can start making you amazing burger yourself by adding ingredients :) </p>
    }

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;