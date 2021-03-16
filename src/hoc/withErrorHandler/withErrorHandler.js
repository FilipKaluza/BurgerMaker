import React from 'react';

import Modal from "../../components/UI/Modal/Modal";
import Aux from "../Aux/Aux";

// import custom hook
import useHttpErrorHandler from "../../hooks/http-error-handler";


const withErrorHandler = (WrappedComponent, axios) => {
    return props => {

        const [error, clearErrorHandler] = useHttpErrorHandler(axios);
        
        return(
        <Aux>
            <Modal show={error} hideModal={clearErrorHandler}>
                {error ? error.message : null} 
            </Modal>
            <WrappedComponent {...props} />
        </Aux>
            
        )
    }
} 

export default withErrorHandler