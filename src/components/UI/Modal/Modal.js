import React from 'react'

// import hoc components
import Aux from "../../../hoc/Aux/Aux"
import Backdrop from "../Backdrop/Backdrop";

//import css
import classes from "./Modal.css"

const modal = (props) => {

    return (
        <Aux>
            <Backdrop  show={props.show} clicked={props.hideModal} />  
                <div className={classes.Modal} style={{transform:props.show ? "translateY(0)" : "translateY(-100vw)", opacity: props.show ? "1" : "0"}}>
            { props.children }
            </div>
        </Aux>

    )
    
}


export default React.memo(modal,
    (prevProps, nextProps) => nextProps === prevProps.show && nextProps.children === prevProps.children);

// it means, if user change prop show, which means he want to see Modal, only in this case we update this component and his childs (performance improver)