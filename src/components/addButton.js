import React, { Component } from "react";

export default class AddButton extends Component {
    render() {
        return (
            <>
                <button type="button" className="btn btn-outline-primary" onClick={() => this.props.onItemAdded('Hello')}>
                    Add item
                </button>
            </>
        );
    }
};