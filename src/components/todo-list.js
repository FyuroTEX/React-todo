import React from 'react';
import TodoListItem from './todo-lest-item'

const TodoList = ({todos}) => {
    const elements = todos.map((item) => {

        const { id, ...itemProps } = item;

        return (
            <li key={id}><TodoListItem {...itemProps} /></li>
            // <li><TodoListItem label={item.label} important={item.important} /></li>
        );
    });
    return (
        <ul>
            {elements}
            <li><TodoListItem label='Learn JS' /></li>
            <li><TodoListItem label='Build React App' important /></li>
            <li><TodoListItem label={todos[0].label} important={todos[0].important} /></li>
            <li><TodoListItem label={todos[1].label} important={todos[1].important} /></li>
            <li><TodoListItem label={todos[2].label} important={todos[2].important} /></li>
        </ul>
    )
};
export default TodoList; 