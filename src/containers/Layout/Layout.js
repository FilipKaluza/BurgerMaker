import React, { Component } from 'react';

// import hoc
import Aux from "../../hoc/Aux/Aux"; //import hoc component instead wrapping code in divs

// import components
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

// import css
import classes from "./Layout.css"


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
            <Toolbar openSideDrawer={this.sideDrawerOpenHandler} />
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler} />
            <main className={classes.Content}>
                {this.props.children}
            </main>
        </Aux>
    )
}}

export default Layout;