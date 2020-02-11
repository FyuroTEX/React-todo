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
                this.createTodoItem('Learn JS'),
                this.createTodoItem('Learn React'),
                this.createTodoItem('Build App'),
                this.createTodoItem('Create Portfolio'),
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleDone = this.onToggleDone.bind(this);
        this.createTodoItem = this.createTodoItem.bind(this);
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
    }
    };
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
    maxId = 1;
    addItem(text) {
        const newItem = this.createTodoItem(text);
        this.setState(({ todoData }) => {
            const newData = [...todoData, newItem];
            return {
                todoData: newData
            }
        });
    };
    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
            const oldItem = arr[idx];
        const newItem = { ...oldItem, [propName]: !oldItem[propName] };
        
            return [
                ...arr.slice(0, idx),
                newItem,
                ...arr.slice(idx + 1)
            ];
           
    };
    onToggleDone(id) {
        this.setState(({todoData}) => {
         
            return {
                todoData: this.toggleProperty(todoData,id, 'done')
            };

        });
    };
    onToggleImportant(id) {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData,id, 'important')
            }
       })
    };
    

    render() {
        const { todoData } = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>

                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                />
                <ItemAddForm onItemAdded={this.addItem} />
            </div>
        );
    }

};
