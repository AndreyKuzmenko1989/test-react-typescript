import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../features/auth/hooks/useAuth";


export const PublicRoute = () => {
    return !isLoggedIn
        ? <Outlet />
        : <Navigate to="/" />;
};
