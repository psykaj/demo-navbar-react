import React from "react";
import { Outlet , useNavigate} from "react-router-dom";

const Support = () => {
    const Navigate = useNavigate();

    function clickHandler() {
        // Move to Labs page
        Navigate('/Labs');
    }

    function backHandler() {
        // Move to back page
        Navigate(-1);
    }

    return (
        <div>
            <div>
                <Outlet />
                This is Support Page
            </div>
            <button onClick={clickHandler}>Move to Labs page</button>
            <button onClick={backHandler}>Go Back</button>
        </div>
        
    );
}

export default Support;