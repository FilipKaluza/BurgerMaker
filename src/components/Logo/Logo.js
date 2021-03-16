import React from 'react';

import burgerlogo from "../../assets/images/burger-logo.png";
import { NavLink } from "react-router-dom";


// import css
import classes from "./Logo.css";

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <NavLink to="/" > <img src={burgerlogo} alt="myBurgerlogo" />  </NavLink>
    </div>
)

export default logo;