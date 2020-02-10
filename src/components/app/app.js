import React, { Component } from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter/item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            todoData: [
                { label: 'Learn JS', important: true, id: 1 },
                { label: 'Learn React', important: false, id: 2 },
                { label: 'Build App', important: false, id: 3 },
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }


    deleteItem(id) {
        this.setState(({ todoData }) => {

            // const idx = todoData.findIndex((el) => el.id === id);
            // const newData = [
            //     ...todoData.slice(0, idx),
            //     ...todoData.slice(idx + 1)
            // ];


            const newData = todoData.filter((item) => item.id !== id);
            return {
                todoData: newData
            };
        });
    };
    maxId = 100;
    addItem(text) {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };
        this.setState(({ todoData }) => {
            const newData = [...todoData, newItem];
            return {
                todoData: newData
            }
        });
    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }

};
