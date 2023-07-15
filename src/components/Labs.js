import React from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Labs = () => {

    const Navigate = useNavigate();

    function clickHandler() {
        // Move to about us page
        Navigate('/about');
    }

    return (
        <div>
            <div>
                <Outlet />
                This is Labs Page
            </div>
            <button onClick={clickHandler}>Move to About Us page</button>
        </div>
        
    );
}

export default Labs;