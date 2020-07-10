import React from "react";

function SearchBox(props) {
    return (
        <div className="input-group input-group-lg">
            <input
                className="form-control"
                type="text"
                {...props} />
        </div>
    )
};

export default SearchBox;
