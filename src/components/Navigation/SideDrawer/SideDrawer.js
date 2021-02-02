import React from 'react'

//import hoc
import Aux from "../../../hoc/Aux/Aux";

// import components
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";

//import css
import classes from "./SideDrawer.css"

const sideDrawer = (props) => {
    let attachedClass = [classes.SideDrawer, classes.Close];
    if (props.open === true) {
        attachedClass = [classes.SideDrawer, classes.Open]
    }
    
    return (
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={attachedClass.join(" ")}>
                <Logo height="50px" />
                <nav>
                    <NavigationItems isAuthenticated={props.isAuth} />
                </nav>

            </div>
        </Aux>

    )
}

export default sideDrawer;