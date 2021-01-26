import React from 'react'

// import css
import classes from "./Input.css";

const input = (props) => {

    let inputElement = null;

    // checking if form is valid
    const InputClasses = [inputElement]

    if (props.invalid && props.shouldValidate && props.touched) {
        InputClasses.push(classes.Invalid); // if is props invalid true add new invalid class
    }

    // showing error message if its not valid


    switch (props.elementType) {
        case("input"): 
            inputElement = <input className={InputClasses.join(" ")} {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case("textarea"):
            inputElement = <textarea className={InputClasses.join(" ")}  {...props.elementConfig}  value={props.value} onChange={props.changed} />;
            break;
        case("select"):
            inputElement = (
                <select
                    className={InputClasses.join(" ")}  
                    value={props.value}
                    onChange={props.changed} >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>))} 
                    
                </select>
            );
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props.elementConfig}  value={props.value} onChange={props.changed} />;
    }

    return(
        <div className={classes.Input}>
            <label className={classes.Label}> {props.label} </label>
            {inputElement}
        </div>
    )
}

export default input;