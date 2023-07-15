import React from "react";
import { Outlet  , useNavigate} from "react-router-dom";

const About = () => {

    const Navigate = useNavigate();

    function clickHandler() {
        // Move to support page
        Navigate('/support');
    }

    return (
        <div>
            <div>
                <Outlet />
                This is About Page
            </div>
            <button onClick={clickHandler}>Move to Support Page</button>
        </div>
        
    );
}

export default About;