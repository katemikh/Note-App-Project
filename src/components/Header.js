import React from "react";

const Header =({handleToggleDarkMode}) => {
    return ( 
        <div className="header">
            <h1> NOTES APP</h1>
            <button onClick= {()=> 
            handleToggleDarkMode (
                (previouseDarkMode) => !previouseDarkMode)}
            className="save"> 
            Toggle Mode
            </button>
        </div>

    );
};
export default Header;