import React, { Component } from "react";
import './todoListItem.css'

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    onLabelClick = () => {
        this.setState((state) => {
            return {
                done: !state.done
            };
        });
    };

    onImportantClick = () => {
        this.setState((state) => {
            return {
                important: !state.important
            };
        });
    };

    render() {
        const {label, onDeleted} = this.props;

        const {done, important} = this.state;
        let classNames = 'todoListItem';
        if (done === true) {
            classNames = classNames + ' done';
        }
        if (important === true) {
            classNames = classNames + ' important';
        }

        return (
            <>
            <span className={classNames} onClick={this.onLabelClick}>
                {label}
            </span>
                <button type="button" className="btn btn-outline-danger pull-right myBtn" onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                </button>
                <button type="button" className="btn btn-outline-primary pull-right myBtn" onClick={this.onImportantClick}>
                    <i className="fa fa-exclamation"/>
                </button>
            </>
        );
    }
}