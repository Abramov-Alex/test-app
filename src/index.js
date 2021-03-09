import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './components/appHeader'
import SearchPanel from './components/searchPanel'
import TodoList from './components/todoList'
import ItemStatusFilter from './components/itemStatusFilter';
import AddButton from './components/addButton';
import TestClassJs from './components/testClassJs';
import TestJs from './components/testJs';
// import AppJs from './App';

class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Learn React'),
            this.createTodoItem('Build My App'),
            this.createTodoItem('Lunch')
        ],
        term: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        };
    };

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

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            //update object
            const index = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[index];
            const newItem = {...oldItem, done: !oldItem.done};

            //new array
            const newTodoData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];

            return {
                todoData: newTodoData
            }
        })
    };

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            //update object
            const index = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[index];
            const newItem = {...oldItem, important: !oldItem.important};

            //new array
            const newTodoData = [...todoData.slice(0, index), newItem, ...todoData.slice(index + 1)];

            return {
                todoData: newTodoData
            }
        })
    };

    onSearchChange = (term) => {
        this.setState({term});
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };

    render() {

        const { todoData, term, filter } = this.state;

        const visibleItems = this.filter(this.search(todoData, term), filter);
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <div className="container">
                <TestClassJs />
                <TestJs />
                <div className="row">
                    <div className="col-md-6">
                        <AppHeader />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pull-right result">{todoCount} more to do, {doneCount} done</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-9">
                        <SearchPanel onSearchChange={this.onSearchChange}/>
                    </div>
                    <div className="col-md-3">
                        <ItemStatusFilter
                            filter={filter}
                            onFilterChange={this.onFilterChange}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <TodoList
                            todos={visibleItems}
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
}

ReactDOM.render(
    <App/>,
    // <React.StrictMode>
    //   <AppJS />
    // </React.StrictMode>,
    document.getElementById('root')
);
