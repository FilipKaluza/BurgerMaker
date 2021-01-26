import React from 'react';

// import components
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import ToogleButton from "../ToogleButton/ToogleButton";

// import css
import classes from "./Toolbar.css";

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <ToogleButton clicked={props.openSideDrawer} />
        <div><Logo height="40px" /></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
)

export default toolbar;