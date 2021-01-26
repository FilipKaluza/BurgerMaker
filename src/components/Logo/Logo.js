import React from 'react';

import burgerlogo from "../../assets/images/burger-logo.png";

// import css
import classes from "./Logo.css";

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={burgerlogo} alt="myBurgerlogo" />
    </div>
)

export default logo;