import React from "react";
import { Outlet } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <Outlet />
            This is Not Found Page
        </div>
    );
}

export default NotFound;