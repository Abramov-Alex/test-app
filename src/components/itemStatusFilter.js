import React, { Component } from "react";

export default class ItemStatusFilter extends Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'}
    ];

    render() {

        const {filter, onFilterChange} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const isActive = filter ===name;
            const clazz = isActive ? 'btn-primary' : 'btn-outline-primary'
            return (
                <button
                    type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => onFilterChange(name)}
                >
                    {label}
                </button>
            )
        });

        return (
            <div className='btn-group' style={{width: '100%'}}>
                {buttons}
            </div>
        )
    }
}