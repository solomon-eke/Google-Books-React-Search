import React from "react";

function JumboTron({ children }) {
    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                {children}
            </div>
        </div>
    );
}

export default JumboTron;
