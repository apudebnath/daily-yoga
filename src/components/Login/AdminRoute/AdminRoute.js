import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, isLoading, admin} = useAuth();
    const location = useLocation();
    if(isLoading){
        return <svg class="animate-spin h-5 w-5 mr-3 text-blue bg-stone-800  ..." viewBox="0 0 24 24"></svg>
    }
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;