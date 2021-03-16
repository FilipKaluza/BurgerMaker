import React, { useState } from 'react';

// import hoc
import Aux from "../../hoc/Aux/Aux"; //import hoc component instead wrapping code in divs

// import components
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// import css
import classes from "./Layout.css"

// connect Reudx
import { connect } from "react-redux";


const layout = (props) => {



    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(!showSideDrawer)
    }

    return (
    <Aux>
        <Toolbar isAuth={props.isAuthnticated} openSideDrawer={sideDrawerOpenHandler} />
        <SideDrawer isAuth={props.isAuthnticated}  open={showSideDrawer} closed={sideDrawerCloseHandler} />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
    )
}

const mapStateToProps = state => {
    return {
        isAuthnticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(layout);