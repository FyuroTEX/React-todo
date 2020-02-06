import React from 'react';
import TodoListItem from './todo-lest-item'

const TodoList = () => {
    const item = ['Learn React', 'Build Awesome App'];
    return (
        <ul>
            <li><TodoListItem label='Learn JS' /></li>
            <li>{item[0]}</li>
            <li>{item[1]}</li>
        </ul>
    )
};
export default TodoList;