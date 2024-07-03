import React from 'react';
import {useAuth} from "../context/AuthContext";
import {Route, Navigate} from 'react-router-dom';
import Loader from "../components/ui/Loader";

const PrivateRoute = ({ component: Component, ...rest }) => {
    const { token } = useAuth();

    return (
        <Route
            {...rest}
            render={props =>
                token ? (
                    <Component {...props} />
                ) : (
                    <Route path="/*" element={<Navigate to="/login" replace />} />
                )
            }
        />
    );
};

export default PrivateRoute;