import React from "react";
import './todoListItem.css'

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black'
    };
    return (
        <>
            <span className="todoListItem" style={style}>
            { label }
            </span>
            <button type="button" className="btn btn-outline-danger pull-right myBtn"><i className="fa fa-trash-o"></i></button>
            <button type="button" className="btn btn-outline-primary pull-right myBtn"><i className="fa fa-exclamation"></i></button>
        </>
    );
};

export default TodoListItem;