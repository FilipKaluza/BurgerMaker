import React from 'react'

//import css
import classes from "./Backdrop.css";

const backdrop = (props) => {
    return (
        props.show ? <div className={classes.Backdrop} onClick={props.clicked} ></div> : null 
    )
}

export default backdrop;