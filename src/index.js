import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './components/appHeader'
import SearchPanel from './components/searchPanel'
import TodoList from './components/todoList'
import ItemStatusFilter from "./components/itemStatusFilter";
import AddButton from "./components/addButton";
// import AppJs from './App';

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build My App'),
            this.createTodoItem('Lunch')
        ]
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const index = todoData.findIndex((el) => el.id === id);
            const newTodoData = [...todoData.slice(0, index), ...todoData.slice(index + 1)];
            return {
                todoData: newTodoData
            };
        });
    };

    addItem = (text) => {
        const newItem = this.createTodoItem(text);
        this.setState(({todoData}) => {
            const newArr = [
                ...todoData,
                newItem
            ];
            return {
                todoData: newArr
            };
        });
    };

    onToggleImportant = (id) => {
        console.log('hi', id);
    };

    onToggleDone = (id) => {
        console.log('hi', id);
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <AppHeader/>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pull-right result">1 more to do, 3 done</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <SearchPanel/>
                    </div>
                    <div className="col-md-3">
                        <ItemStatusFilter/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <TodoList
                            todos={this.state.todoData}
                            onDeleted={this.deleteItem}
                            onToggleImportant={this.onToggleImportant}
                            onToggleDone={this.onToggleDone}
                        />
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-md-12">
                        <AddButton onItemAdded={this.addItem}/>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(
    <App/>,
    // <React.StrictMode>
    //   <AppJS />
    // </React.StrictMode>,
    document.getElementById('root')
);
