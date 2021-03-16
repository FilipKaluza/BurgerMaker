import React, { useEffect, useState } from 'react';

// import components
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";

// import css
import classes from "./Auth.css"

// connect Redux
import { connect } from "react-redux";

// import actions
import * as actions from "../../store/actions/index";
import { Redirect } from 'react-router';

// import checkvalidity from shared folder
import { checkValidity } from "../../shared/utility";

const auth = (props) => {

    const [controls, setControls ] = useState({
        email: {
            elementType: "input",
            elementConfig: {
                type: "email",
                placeholder: "E-mail address"
            },
            value: "",
            validation: {
                required: true,
                isEmail: true
            },
            valid: false,
            touched: false
        },
        password: {
            elementType: "input",
            elementConfig: {
                type: "password",
                placeholder: "Your password"
            },
            value: "",
            validation: {
                required: true,
                minLength: 6
            },
            valid: false,
            touched: false
        }
    });

    const [isSignup, setIsSignup] = useState(true)

    const { buildingBurger, authRedirect, onSetAuthRedirectUrl } = props;

    useEffect(() => {
        if (!props.buildingBurger && props.authRedirect !== "/") {
            props.onSetAuthRedirectUrl();
        }
    }, [buildingBurger, authRedirect, onSetAuthRedirectUrl])



    
    const inputChangedHandler = (event, controlName) => {
        const updatedControls = {
            ...controls,
            [controlName]: {
                ...controls[controlName],
                value: event.target.value,
                valid: checkValidity(event.target.value, controls[controlName].validation),
                touched: true
            }
        };
        setControls(updatedControls)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(controls.email.value, controls.password.value, isSignup)
    }

    const switchAuthModeHandler = () => {
        setIsSignup(!isSignup)
    }

    const formElementArray = [];
    for (let key in controls) {
        formElementArray.push({
            id: key,
            config: controls[key]
        });
    }

    let form = formElementArray.map(formElement => (
        <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            changed={(event) => inputChangedHandler(event, formElement.id)}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched} />
    )) ;
    
    if (props.loading) {
        form = <Spinner />
    };

    let errorMessage = null;
    if (props.error) {
        errorMessage = (
            <p> {props.error.message} </p>
        );
    };

    let authRedirecting = null;
    if (props.isAuthenticated) {
        authRedirecting = <Redirect to={props.authRedirect} />
    }

    return (
        <div className={classes.Auth} >
            {authRedirecting}
            {errorMessage}
            <form onSubmit={submitHandler}>
                {form}
                <Button btnType="Success" > Submit </Button>
            </form>
            <Button btnType="Danger" clicked={switchAuthModeHandler}> Swtich to {isSignup ? "SIGN IN" : "SIGN UP" } </Button>
        </div>
    )
    
};

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null,
        buildingBurger: state.burgerBuilder.building,
        authRedirect: state.auth.authRedirect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
        onSetAuthRedirectUrl: () => dispatch(actions.setAuthRedirectUrl("/"))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(auth);

