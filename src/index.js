import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './components/appHeader'
import SearchPanel from './components/searchPanel'
import TodoList from './components/todoList'
// import App from './App';
import reportWebVitals from './reportWebVitals';

const todoData = [
    {label: 'Learn React', important: false},
    {label: 'Build My App', important: true},
    {label: 'Lunch', important: false},
]

const App = () => {
    return (
        <div>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={todoData} />
        </div>
    );
};

ReactDOM.render(<App />,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
