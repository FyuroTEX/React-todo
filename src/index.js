import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';

const App = () => {

  const todoData = [
    { label: 'Learn JS', important: true, id: 1},
    {label: 'Learn React', important: false, id: 2},
    {label: 'Build App', important: false, id: 3},
]

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
