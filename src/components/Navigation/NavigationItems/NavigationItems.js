import React from 'react'

// import componnents
import NavigationItem from "./NavigationItem/NavigationItem";

// import css
import classes from "./NavigationItems.css"

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
         <NavigationItem link="/" exact > Burger Builder </NavigationItem>
         <NavigationItem link="/orders" > Orders </NavigationItem>

    </ul>
)

export default navigationItems;