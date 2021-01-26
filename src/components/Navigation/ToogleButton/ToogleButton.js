import React from 'react'

// import css
import classes from "./ToogleButton.css"

const toogleButton = (props) => (
    <div className={classes.ToogleButton} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default toogleButton;