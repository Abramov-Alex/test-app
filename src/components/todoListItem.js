import React, { Component } from "react";
import './todoListItem.css'

export default class TodoListItem extends Component {

    render() {
        const {label, onDeleted, important, done, onToggleImportant, onToggleDone} = this.props;

        let classNames = 'todoListItem';
        if (done === true) {
            classNames = classNames + ' done';
        }
        if (important === true) {
            classNames = classNames + ' important';
        }

        return (
            <>
            <span className={classNames} onClick={onToggleDone}>
                {label}
            </span>
                <button type="button" className="btn btn-outline-danger pull-right myBtn" onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
                <button type="button" className="btn btn-outline-primary pull-right myBtn" onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                </button>
            </>
        );
    }
}