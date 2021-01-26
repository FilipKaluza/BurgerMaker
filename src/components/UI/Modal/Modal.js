import React, { Component } from 'react'

// import hoc components
import Aux from "../../../hoc/Aux/Aux"
import Backdrop from "../Backdrop/Backdrop";

//import css
import classes from "./Modal.css"

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show || nextProps.children !== this.props.children) {
            return true; // it means, if user change prop show, which means he want to see Modal, only in this case we update this component and his childs (performance improver)
        } else {
            return false
        }
    } // I can just write return nextProps.show !== this.props.show; (less rows)

    

    componentDidUpdate() {
        console.log("modal updating")
    }

    render() {
        return (
            <Aux>
                <Backdrop  show={this.props.show} clicked={this.props.hideModal} />  
                 <div className={classes.Modal} style={{transform:this.props.show ? "translateY(0)" : "translateY(-100vw)", opacity: this.props.show ? "1" : "0"}}>
                { this.props.children }
                </div>
            </Aux>
    
        )
    }
}

export default Modal;