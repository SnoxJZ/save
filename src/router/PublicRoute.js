import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import {useAuth} from "../context/AuthContext";

const PublicRoute = () => {
    const { token } = useAuth();
    return token ? <Navigate to="/app" /> : <Outlet />;
};

export default PublicRoute;