import React, { useEffect } from 'react';

import * as actions from "../../../store/actions/index";
import { Redirect } from "react-router-dom";


//connect Redux
import { connect } from "react-redux"

const logout = (props) => {

    const { onLogout } = props;

    useEffect(() => {
        props.onLogout();
    }, [onLogout]);

    return <Redirect to="/" />;
    
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    };
};

export default connect(null, mapDispatchToProps)(logout);