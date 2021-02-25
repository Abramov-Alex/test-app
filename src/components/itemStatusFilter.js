import React from "react";

const ItemStatusFilter = () => {
    return (
        <div className="btn-group myGroup">
            <button type="button" className="btn btn-primary">All</button>
            <button type="button" className="btn btn-outline-primary">Active</button>
            <button type="button" className="btn btn-outline-primary">Done</button>
        </div>
    );
};

export default ItemStatusFilter;