import React, { Component } from 'react';

// import hoc
import Aux from "../../hoc/Aux/Aux"; //import hoc component instead wrapping code in divs

// import components
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// import css
import classes from "./Layout.css"

// connect Reudx
import { connect } from "react-redux";


class Layout extends Component{

    state = {
        showSideDrawer: false
    }

    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpenHandler = () => {
        this.setState( (prevState ) => {
            return {showSideDrawer: !prevState.showSideDrawer} 
        })
    }

    render() {
        return (
        <Aux>
            <Toolbar isAuth={this.props.isAuthnticated} openSideDrawer={this.sideDrawerOpenHandler} />
            <SideDrawer isAuth={this.props.isAuthnticated}  open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )
}}

const mapStateToProps = state => {
    return {
        isAuthnticated: state.auth.token !== null
    };
};

export default connect(mapStateToProps)(Layout);