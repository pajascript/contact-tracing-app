import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({isAuth, component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render = {(props) => {
                if (isAuth === true) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={{pathname: '/', state: {from: props.location} }} />
                }
            }}
        />
    )
}

export default ProtectedRoute;