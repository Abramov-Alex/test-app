import React from "react";
import './todoList.css'
import TodoListItem from './todoListItem'

const TodoList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className="list-group-item">
                <TodoListItem { ...itemProps } />
            </li>
        );
    });

    return (
        <ul className="list-group todoList">
            { elements }
        </ul>
    );
};

export default TodoList;