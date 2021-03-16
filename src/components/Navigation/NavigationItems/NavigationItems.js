import React from 'react'

// import componnents
import NavigationItem from "./NavigationItem/NavigationItem";

// import css
import classes from "./NavigationItems.css"

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact > Burger Builder </NavigationItem>
        { props.isAuthenticated ? <NavigationItem link="/orders" > Orders </NavigationItem> : null }
        { props.isAuthenticated ? <NavigationItem link="/logout" > Logout </NavigationItem> :  <NavigationItem link="/auth" > Sign in </NavigationItem> }
    </ul>
)

export default navigationItems;