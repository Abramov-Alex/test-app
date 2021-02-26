import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppHeader from './components/appHeader'
import SearchPanel from './components/searchPanel'
import TodoList from './components/todoList'
import ItemStatusFilter from "./components/itemStatusFilter";
// import AppJs from './App';

class App extends Component {

    state = {
        todoData: [
            {label: 'Learn React', important: false, id: 1},
            {label: 'Build My App', important: true, id: 2},
            {label: 'Lunch', important: false, id: 3}
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {

        })
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
                        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
                    </div>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<App/>,
    // <React.StrictMode>
    //   <AppJS />
    // </React.StrictMode>,
    document.getElementById('root')
);
