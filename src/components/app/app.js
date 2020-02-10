import React from 'react';


import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';

import './app.css';

const App = () => {

    const todoData = [
        { label: 'Learn JS', important: true, id: 1 },
        { label: 'Learn React', important: false, id: 2 },
        { label: 'Build App', important: false, id: 3 },
    ]

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};
export default App;